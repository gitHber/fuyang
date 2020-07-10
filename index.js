const container = document.getElementById("root");
const tooltip = document.getElementById("tooltip");
const offset = [0, -300];
const colors = ["#F36969", "#45A8E6", "#4ACFB1", "#FF9B54"];
let path_2_1 = [
  [1020, 1400],
  [1020, 700],
  [720, 700],
  [720, 1100],
  [700, 1100],
];
let path_2_2 = [
  [720, 1100],
  [1000, 1100],
  [1000, 1400],
  [1020, 1400],
];

let path1 = [
  [1020, 1400],
  [1060, 1400],
  [1060, 660],
  [740, 660],
  [740, 620],
  [1060, 620],
  [1060, 320],
  [1160, 320],
  [1160, 300],
  [720, 300],
];
let path2 = [
  [720, 300],
  [700, 300],
  [700, 580],
  [720, 580],
  [720, 320],
  [1020, 320],
  [1020, 600],
  [700, 600],
  [700, 680],
  [1040, 680],
  [1040, 1400],
];
let path3 = [
  [690, 1100],
  [690, 1340],
  [350, 1340],
  [350, 1350],
  [700, 1350],
  [700, 1100],
];
let path4 = [
  [700, 1100],
  [700, 950],
  [350, 950],
  [0, 950],
  [0, 960],
  [350, 960],
  [690, 960],
  [690, 1100],
  [700, 1100],
];

const paths = [
  path1,
  path2,
  [...path_2_1, ...path3, ...path_2_2],
  [...path_2_1, ...path4, ...path_2_2],
];

let points = [
  {
    pos: [
      [1020, 1400, 0, 2, 3],
      [700, 300, 1],
    ],

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
    pos: [
      [1020, 1350, 2, 3],
      [800, 1100, 2, 3],
      [1060, 1250, 0],
      [1040, 1100, 1],
    ],
    title: "直线行驶",
    des: "驶上道路后，关左灯，前面有车先等其走远，加到三档，对地上的点直线行驶",
  },
  {
    pos: [
      [1020, 1050, 2, 3],
      [1060, 950, 0],
      [1040, 800, 1],
    ],
    title: "超车",
    des: "打灯之后等三秒，缓缓转向，灯灭了的话，赶紧重新打上",
  },
  {
    pos: [[740, 640, 0]],
    title: "人行横道",
    des: "",
  },
  {
    pos: [[1020, 700, 2, 3]],
    title: "隧道",
    des: "没啥可说的",
  },
  {
    pos: [[900, 700, 2, 3]],
    title: "四挡5秒",
    des:
      "也可以在外面道路较长的地方做，加速到35码左右，挂四挡，滑行，默数五秒，换三档，记住不要低于25码换三档",
  },
  {
    pos: [
      [720, 720, 2, 3],
      [900, 660, 0],
      [800, 680, 1],
    ],
    title: "加减档",
    des: "降速到20码以下，换二档，加速到20以上，换三档",
  },
  {
    pos: [
      [720, 900, 2, 3],
      [850, 620, 0],
      [950, 600, 1],
    ],
    title: "学校",
    des: "左右观察，摇头幅度大一点",
  },
  {
    pos: [
      [740, 1100, 2, 3],
      [800, 620, 0],
      [900, 600, 1],
    ],
    title: "公交车",
    des: "加速到二挡，左右摇头，之后再加到三档",
  },
  {
    pos: [
      [350, 1340, 2],
      [0, 950, 3],
      [1160, 310, 0],
      [710, 580, 1],
    ],
    title: "掉头",
    des: "先打左灯，降速停稳，挂一档，左打死，观察路况掉头",
  },
  {
    pos: [
      [400, 1350, 2],
      [40, 960, 3],
      [1060, 520, 0],
      [1020, 400, 1],
    ],
    title: "会车",
    des: "左右观察，摇头幅度大一点",
  },
  {
    pos: [
      [900, 1100, 2, 3],
      [760, 300, 0],
      [1040, 1300, 1],
    ],
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
    pos: [350, 955, 3],
    des: "红绿灯约在10s左右，比较短，不要全程一档过，加到三档，准备前面掉头",
  },
  {
    pos: [695, 955, 3],
    des: "红绿灯基本上只能过一辆车，所以等前车走了自己再等下一个",
  },
  {
    pos: [680, 1100, 2, 3],
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
    pos: [695, 1345, 2],
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
function createPath({ pos, w, h }, color = "#000", ...args) {
  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.left = (w > 0 ? pos[0] : pos[0] + w) + offset[0] + "px";
  div.style.top = (h > 0 ? pos[1] : pos[1] + h) + offset[1] + "px";
  div.style.width = Math.abs(w) + "px";
  div.style.height = Math.abs(h) + "px";
  div.style.border = `1px solid ${color}`;
  args.forEach((arg) => {
    div.classList.add(arg);
  });
  container.appendChild(div);
}
function createRedLight(lights) {
  lights.forEach(({ pos: [x, y, ...args], des }) => {
    let dot = document.createElement("div");
    let red = document.createElement("i");
    let green = document.createElement("i");
    red.classList.add("red");
    green.classList.add("green");
    dot.appendChild(red);
    dot.appendChild(green);
    dot.classList.add("red-green");
    dot.style.left = x + offset[0] + "px";
    dot.style.top = y + offset[1] + "px";
    dot.title = "红绿灯";
    tip(dot, des);
    args.forEach((arg) => {
      dot.classList.add(arg);
    });
    container.appendChild(dot);
  });
}
function createPoints(points) {
  points.forEach(({ pos, title, des }) => {
    pos.forEach(([x, y, ...args]) => {
      let point = document.createElement("i");
      point.classList.add("point");
      point.style.left = x + offset[0] + "px";
      point.style.top = y + offset[1] + "px";
      point.innerText = title;
      tip(point, des);
      args.forEach((arg) => {
        point.classList.add(arg);
      });
      container.appendChild(point);
    });
  });
}

createRedLight(redLights);
createPoints(points);

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const car = document.getElementById("car");
const buttons = [b1, b2, b3, b4];

colors.forEach((color, i) => {
  transformPathToDiv(paths[0]).forEach((p) => createPath(p, colors[0], 0));
  transformPathToDiv(paths[1]).forEach((p) => createPath(p, colors[1], 1));
  transformPathToDiv(paths[2]).forEach((p) => createPath(p, colors[2], 2));
  transformPathToDiv(paths[3]).forEach((p) => createPath(p, colors[3], 3));
  transformPathToDiv(path_2_1).forEach((p) => createPath(p, "#000", 2, 3));
  transformPathToDiv(path_2_2).forEach((p) => createPath(p, "#000", 2, 3));
  buttons[i].style.backgroundColor = color;
  buttons[i].addEventListener("click", () => {
    Array.from(document.getElementsByClassName(i)).forEach(
      (node) => (node.style.opacity = "1")
    );
    [0, 1, 2, 3]
      .filter((index) => index !== i)
      .map((index) =>
        Array.from(document.getElementsByClassName(index)).forEach(
          (node) => (node.style.opacity = ".01")
        )
      );

    const keyframes = paths[i].map(([left, top]) => ({
      left: left + offset[0] + "px",
      top: top + offset[1] + "px",
    }));
    car.animate(keyframes, {
      duration: 40000,
      fill: "forwards",
    });
  });
});

Array.from(document.getElementsByClassName("0")).forEach(
  (node) => (node.style.opacity = "1")
);
Array.from(document.getElementsByClassName("1")).forEach(
  (node) => (node.style.opacity = "1")
);
Array.from(document.getElementsByClassName("2")).forEach(
  (node) => (node.style.opacity = ".01")
);
Array.from(document.getElementsByClassName("3")).forEach(
  (node) => (node.style.opacity = ".01")
);

document.querySelectorAll('[name="date"]').forEach((node) => {
  node.addEventListener("change", (e) => {
    if (e.target.checked) {
      if (e.target.value === "single") {
        Array.from(document.getElementsByClassName("0")).forEach(
          (node) => (node.style.opacity = "1")
        );
        Array.from(document.getElementsByClassName("1")).forEach(
          (node) => (node.style.opacity = "1")
        );
        Array.from(document.getElementsByClassName("2")).forEach(
          (node) => (node.style.opacity = ".01")
        );
        Array.from(document.getElementsByClassName("3")).forEach(
          (node) => (node.style.opacity = ".01")
        );
      } else {
        Array.from(document.getElementsByClassName("0")).forEach(
          (node) => (node.style.opacity = ".01")
        );
        Array.from(document.getElementsByClassName("1")).forEach(
          (node) => (node.style.opacity = ".01")
        );
        Array.from(document.getElementsByClassName("2")).forEach(
          (node) => (node.style.opacity = "1")
        );
        Array.from(document.getElementsByClassName("3")).forEach(
          (node) => (node.style.opacity = "1")
        );
      }
    }
  });
});
