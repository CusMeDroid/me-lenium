// upload image to github
function uploadImage(data) {
  return fetch(
    `https://api.github.com/repos/${data.owner}/${data.repo}/contents/${data.name}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `CusMeDroid ${data.token}`
      },
      body: JSON.stringify({
        message: "upload image from api",
        content: data.content
      })
    }
  ).then((res) => res.json());
}

function insertImage(src) {
  const newImage = document.createElement("img");
  newImage.src = src;
  document.querySelector(".img").innerHTML = newImage.outerHTML;
}

function getRandomName(type) {
  if (type.endsWith("png")) {
    return [Date.now(), ".png"].join("");
  }
  return [Date.now(), ".jpeg"].join("");
}

function blobToBase64(blob) {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const srcData = fileReader.result;
      resolve(srcData);
    };
    fileReader.readAsDataURL(blob);
  });
}

async function parseClipboardData(callback) {
  const items = await navigator.clipboard.read().catch((err) => {
    console.error(err);
  });
  for (let item of items) {
    for (let type of item.types) {
      if (type.startsWith("image/")) {
        console.log("item-->: ", item);
        item
          .getType(type)
          .then(blobToBase64)
          .then((srcData) => {
            insertImage(srcData);
            callback &&
              callback({
                content: srcData,
                name: getRandomName(type),
                type: type
              });
          });
        return true;
      }
    }
  }
}

function handleImageChange(callback) {
  const $file = document.querySelector(".local");
  $file.addEventListener("change", (event) => {
    const selectedfile = event.target.files;
    if (selectedfile.length > 0) {
      const [imageFile] = selectedfile;
      blobToBase64(imageFile).then((srcData) => {
        insertImage(srcData);
        callback &&
          callback({
            content: srcData,
            name: imageFile.name,
            type: imageFile.type
          });
      });
    }
  });

  document.querySelector(".paste").onclick = () => {
    parseClipboardData(callback);
  };
}

window.onload = () => {
  const $form = document.querySelector(".form");
  let image = null;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!image) {
      alert('Image is empty, please select or paste');
      return;
    }
    const formData = new FormData($form);
    const data = {}
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    // 获取图片信息
    uploadImage({
      ...data,
      ...image
    }).then(res => {
      let message = '';
      if (res.message) {
        message = res.message
      } else {
        message = `upload success: <a href="${res.content.html_url}">${res.content.html_url}</a>`
      }
      console.log('res', res);
      document.querySelector('.log').innerHTML = message;
    })
  });

  handleImageChange(imageInfo => {
    image = {
      ...imageInfo,
      content: imageInfo.content.split('base64,')[1]
    };
  });
};