const container = document.getElementById("root");
const tooltip = document.getElementById("tooltip");

let path1 = [
  [1020, 700],
  [1020, 0],
  [720, 0],
  [720, 400],
  [700, 400],
];
let path2 = [
  [720, 400],
  [1000, 400],
  [1000, 700],
  [1020, 700],
];
let path4 = [
  [700, 400],
  [700, 250],
  [350, 250],
  [0, 250],
  [0, 260],
  [350, 260],
  [690, 260],
  [690, 400],
  [700, 400],
];
let path3 = [
  [700, 400],
  [700, 650],
  [350, 650],
  [350, 640],
  [690, 640],
  [690, 400],
  [700, 400],
];

let points = [
  {
    pos: [1020, 700],
    title: "起步",
    des: `
      一、先交身份证，面部识别，验证通过，语音播报开始考试，下车环绕摁按钮
        上车检查
        1. 灯光复位
        2. 仪表盘正常，查看车门有没有关紧
        3. 调整坐姿
        4. 调整后视镜
        5. 系安全带
      二、开始灯光考试
        开近光灯
        1.夜间同方向近距离跟车行驶
        2.夜间发生会车
        3.夜间直行通过路口
        4.夜间路口左转弯
        5.夜间路口右转弯
        6.夜间在照明良好的道路上行驶

        开远光灯
        1.夜间在照明不良的道路上行驶
        2.请将前照灯变换成远光（系统指令）

        交替使用远近光灯
        1.夜间通过急弯
        2.夜间通过坡路
        3.夜间通过拱桥
        4.夜间通过人行横道
        5.夜间超越前方车辆
        6.夜间通过没有交通信号灯控制的路口
      三、起步
        1. 打左灯
        2. 摁喇叭
        3. 放手刹一档
        4. 看仪表盘
  `,
  },
  {
    pos: [1020, 650],
    title: "直线行驶",
    des: "驶上道路后，关左灯，前面有车先等其走远，加到三档，对地上的点直线行驶",
  },
  {
    pos: [1020, 350],
    title: "超车和驶离超车道",
    des: "打灯之后等三秒，缓缓转向，灯灭了的话，赶紧重新打上",
  },
  {
    pos: [1020, 0],
    title: "隧道",
    des: "没啥可说的",
  },
  {
    pos: [900, 0],
    title: "四挡5秒",
    des:
      "也可以在外面道路较长的地方做，加速到35码左右，挂四挡，滑行，默数五秒，换三档，记住不要低于25码换三档",
  },
  {
    pos: [720, 20],
    title: "加减档",
    des: "降速到20码以下，换二档，加速到20以上，换三档",
  },
  {
    pos: [720, 200],
    title: "学校区域",
    des: "左右观察，摇头幅度大一点",
  },
  {
    pos: [350, 650],
    title: "掉头",
    des: "先打左灯，降速停稳，挂一档，左打死，观察路况掉头",
  },
  {
    pos: [400, 640],
    title: "会车",
    des: "左右观察，摇头幅度大一点",
  },
  {
    pos: [0, 250],
    title: "掉头",
    des: "先打左灯，降速停稳，挂一档，左打死，观察路况掉头",
  },
  {
    pos: [40, 260],
    title: "会车",
    des: "左右观察，摇头幅度大一点",
  },

  {
    pos: [740, 400],
    title: "公交车",
    des: "加速到二挡，左右摇头，之后再加到三档",
  },
  {
    pos: [800, 400],
    title: "直线行驶",
    des: "一样，稳住就行",
  },
  {
    pos: [900, 400],
    title: "靠边停车",
    des: `
      1. 在指示牌前先停车，换成一档，继续往前开
      2. 听到指示打右灯，停车，等三秒，缓慢右转
      3. 对路上的点，点与方向盘中点一致，观察后视镜，边上白线宽度与车身距白线距离基本一致，停车，手刹空挡
      4. 语音播报结束考试，等待成绩，安全员会叫你下车，你可以先听成绩，观察后方来车，下车
      `,
  },
];
let redLights = [
  {
    pos: [350, 255],
    des: "红绿灯约在10s左右，比较短，不要全程一档过，加到三档，准备前面掉头",
  },
  {
    pos: [695, 255],
    des: "红绿灯基本上只能过一辆车，所以等前车走了自己再等下一个",
  },
  {
    pos: [680, 400],
    des: `
      这个红绿灯就是三四号线的分界点了,进入路口之前能听到语音提示，打上转向灯，
      1. 右转不需要看灯，只需要看路况
      2. 左转看绿灯才能过
      回程
      1. 三号线回程，是不用看灯，只需要观察路况
      2. 四号线是左转，所以要看灯，这个要注意，我第一次考前面一个人就是这么挂的
      `,
  },
  {
    pos: [695, 645],
    des: `
  1. 去的时候右转不需要看灯，注意路况即可，后面路程较长，如果前面没加四挡，可以加到四挡5s，流程和前面四挡一致
  2. 回程左转需要看灯，绿灯很长，不用着急
  `,
  },
];

function tip(dom, des) {
  dom.addEventListener("click", () => {
    tooltip.innerText = des;
  });
}
function transformPathToDiv(path) {
  let divs = [];
  for (let i = 0; i < path.length - 1; i++) {
    divs.push({
      pos: path[i],
      w: path[i + 1][0] - path[i][0],
      h: path[i + 1][1] - path[i][1],
    });
  }
  return divs;
}
function createPath({ pos, w, h }, color = "#000") {
  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.left = (w > 0 ? pos[0] : pos[0] + w) + "px";
  div.style.top = (h > 0 ? pos[1] : pos[1] + h) + "px";
  div.style.width = Math.abs(w) + "px";
  div.style.height = Math.abs(h) + "px";
  div.style.border = `1px solid ${color}`;
  container.appendChild(div);
}
function createRedLight(lights) {
  lights.forEach(({ pos: [x, y], des }) => {
    let dot = document.createElement("div");
    let red = document.createElement("i");
    let green = document.createElement("i");
    red.classList.add("red");
    green.classList.add("green");
    dot.appendChild(red);
    dot.appendChild(green);
    dot.classList.add("red-green");
    dot.style.left = x + "px";
    dot.style.top = y + "px";
    dot.title = "红绿灯";
    tip(dot, des);
    container.appendChild(dot);
  });
}
function createPoints(points) {
  points.forEach(({ pos: [x, y], title, des }) => {
    let point = document.createElement("i");
    point.style.position = "absolute";
    point.style.left = x + "px";
    point.style.top = y + "px";
    point.style.background = "blue";
    point.style.color = "#fff";
    point.style.fontSize = "12px";
    point.style.padding = "2px";
    point.style.borderRadius = "4px";
    point.style.cursor = "pointer";
    point.style.transform = "translate(-50%, -50%)";
    point.innerText = title;
    tip(point, des);
    container.appendChild(point);
  });
}
transformPathToDiv(path1).forEach((p) => createPath(p));
transformPathToDiv(path2).forEach((p) => createPath(p));

transformPathToDiv(path3).forEach((p) => createPath(p, "#bbbb56"));
transformPathToDiv(path4).forEach((p) => createPath(p, "green"));
createRedLight(redLights);
createPoints(points);

const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const car = document.getElementById("car");
p3.addEventListener("click", () => {
  const keyframes = [...path1, ...path3, ...path2].map(([left, top]) => ({
    left: left + "px",
    top: top + "px",
  }));
  car.animate(keyframes, {
    duration: 40000,
  });
});
p4.addEventListener("click", () => {
  const keyframes = [...path1, ...path4, ...path2].map(([left, top]) => ({
    left: left + "px",
    top: top + "px",
  }));
  car.animate(keyframes, {
    duration: 40000,
  });
});
