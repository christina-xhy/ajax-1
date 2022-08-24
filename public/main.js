console.log("我是main.js2");
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log("request.response");
    console.log(request.response);
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    console.log(request.response);
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseXML); //这是一个DOM对象，接受js 还有XML
    }
    const dom = request.responseXML;
    const text = dom.getElementsByTagName("warning")[0].textContent;
    console.log(text.trim());
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response); //把符合json规范的内容转为对象或者其他的数据类型
      console.log(object);
      myName.textContent = object.name;
    }
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();

  request.open("GET", "/style.css");

  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      console.log("下载完成");
      console.log(request.status);
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载css失败");
      }
    }
  };
  request.send();
};
