import Link from "next/link";
import { Z_INDEX_ORDER } from "@/consts/stylingValues";

const integratedCircuit = (
  <div
    style={{
      position: "absolute",
      top: 350,
      left: "calc(50% - 62.5px)",
      zIndex: Z_INDEX_ORDER.third,
    }}
  >
    <div
      style={{
        width: 10,
        height: 5,
        backgroundColor: "#000",
        transform: "translate(0, 17.5px)",
      }}
    ></div>
    <div
      style={{
        width: 125,
        height: 30,
        backgroundColor: "#223",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        color: "#ccc",
        fontFamily: "sans-serif",
      }}
    >
      Go to Home
    </div>
    <div
      style={{
        width: 125,
        height: 10,
        backgroundColor: "#000",
        boxShadow: "0px 2.5px 0 0px rgba(0,0,0,0.1)",
      }}
    ></div>
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(5px, -5px)",
          // borderTopLeftRadius: '40px 10px',
          // borderTopRightRadius: '40px 10px',
          borderBottomLeftRadius: "4px 1px",
          borderBottomRightRadius: "4px 1px",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(10px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(15px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(20px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(25px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(30px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(35px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(40px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(45px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(50px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(55px, -5px)",
        }}
      ></div>
      <div
        style={{
          width: 5,
          height: 10,
          background:
            "linear-gradient(180deg, rgba(255,238,170,1) 0%, rgba(255,238,170,1) 25%, rgba(219,210,177,1) 25%, rgba(219,210,177,1) 100%)",
          transform: "translate(60px, -5px)",
        }}
      ></div>
    </div>
  </div>
);

const powerballStyle = {
  backgroundColor: "#fff",
  width: 30,
  height: 30,
  borderRadius: 15,
  marginRight: 10,
  textAlign: "center",
  paddingTop: 5,
};
const Custom404 = () => {
  return (
    <div
      style={{
        cursor: "help",
        backgroundColor: "#e5e5f7",
        backgroundImage:
          "repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 4px ), repeating-linear-gradient( #f79645e5, #f756a5 )",
      }}
    >
      <marquee
        behavior="alternate"
        style={{
          fontSize: 20,
          textShadow: "1px 1px #FFAAAA, 2px 2px #AAFFAA, 3px 3px #AAAAFF",
        }}
      >
        You're not supposed to be here.
      </marquee>
      <h1
        style={{
          fontSize: 64,
          textAlign: "center",
          fontFamily: "sans-serif",
          color: "#eb8f67",
          textShadow:
            "0px 0px 0 rgb(222,130,90)," +
            "0px 1px 0 rgb(209,117,77)," +
            "0px 2px 0 rgb(195,103,63)," +
            "0px 3px 0 rgb(182,90,50)," +
            "0px 4px 0 rgb(169,77,37)," +
            "0px 5px 0 rgb(156,64,24)," +
            "0px 6px 0 rgb(143,51,11)," +
            "0px 7px 0 rgb(129,37,0)," +
            "0px 8px 0 rgb(116,24,0)," +
            "0px 9px 0 rgb(103,11,0)," +
            "0px 10px  0 rgb(90,-2,0)," +
            "0px 11px 10px rgba(0,0,0,1)," +
            "0px 11px 1px rgba(0,0,0,0.5)," +
            "0px 0px 10px rgba(0,0,0,.2)",
        }}
      >
        404 - Page Not Found
      </h1>
      <Link href="/">{integratedCircuit}</Link>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          justifyContent: "center",
        }}
      >
        {Array.apply(null, { length: 250 }).map((i, index) => (
          <div
            key={index}
            style={{
              color: `hsl(${(index * 0.2) % 40}, ${
                Math.floor(Math.random() * (100 - 80 + 1)) + 80
              }%, 54%)`,
              transform: `rotate(${index * (360 / 500)}deg)`,
            }}
          >
            {" "}
            The selected page could not be returned.{" "}
          </div>
        ))}
      </div>
      <iframe
        style={{
          border: "none",
          width: 900,
          height: 600,
          display: "block",
          margin: "auto",
          borderRadius: 500,
        }}
        srcDoc={`<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title>Mark Valentino - Software Engineer</title>
	<meta name="keywords" content="Clock, analog">
	<meta name="author" content="Mark Valentino">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            background-color: #eee;
            margin: 0;
            padding: 0;
            transform: rotateX(25deg);
        }
        #tz {
            text-align: center;
            margin-top: 100px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 20px;
            transform: scaleY(0.95);
            text-shadow: 0 0.25px #00000020, 0 0.5px 3px #00000020;
            color: #111;
        }
        .clockFace {
            position: relative;
            width: 400px;
            height: 400px;
            border-radius: 400px;
            background-color: #f5f5f5;
            top: 30px;
            margin: auto;
            border: 10px solid #222;
            box-shadow: 0 8px 8px 0 #0000001f inset, 0 16px 5px 0 #00000014 inset, 0 -40px 100px 0 #ffffff inset, 0 -16px 7px 0 #000000b3 inset;
        }
        .clockRidge {
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 400px;
            background-color: #00000000;
            top: 20.5px;
            left: calc(50% - 210px);
            border: 10px solid #444;
            z-index: 5;
            box-shadow: 0 2.8px 2.2px #00000005, 0 6.7px 5.3px #00000007, 0 12.5px 10px #00000009, 0 22.3px 17.9px #0000000b, 0 41.8px 33.4px #0000000d, 0 100px 80px #00000012;
        }
        .clockBottom {
            position: absolute;
            width: 420px;
            height: 230px;
            border-bottom-left-radius: 420px;
            border-bottom-right-radius: 420px;
            background-color: #222;
            top: 240px;
            left: calc(50% - 210px);
            z-index: -5;
            box-shadow: 0 1.3px 2.2px #00000016, 0 3.1px 5.3px #0000001c, 0 5.8px 10px #0000001e, 0 10.3px 17.9px #00000021, 0 19.2px 33.4px #00000024, 0 46px 80px #0000002e; 
        }
        .n3 {
            position: absolute;
            bottom: calc(50% - 24px);
            right: calc(50% - 9px - 180px);
            text-align: center;
            color: #333;
            font-weight: 200;
            font-size: 36px;
            text-shadow: 0 0.25px #00000020, 0 0.5px 3px #00000020;
        }
        .n6 {
            position: absolute;
            bottom: 5px;
            left: calc(50% - 9px);
            text-align: center;
            color: #333;
            font-weight: 200;
            font-size: 36px;
            text-shadow: 0 0.25px #00000020, 0 0.5px 3px #00000020;
        }
        .n9 {
            position: absolute;
            bottom: calc(50% - 24px);
            left: calc(50% - 9px - 180px);
            text-align: center;
            color: #333;
            font-weight: 200;
            font-size: 36px;
            text-shadow: 0 0.25px #00000020, 0 0.5px 3px #00000020;
        }
        .n12 {
            position: absolute;
            top: 5px;
            left: calc(50% - 18px);
            text-align: center;
            color: #333;
            font-weight: 200;
            font-size: 36px;
            text-shadow: 0 0.25px #00000020, 0 0.5px 3px #00000020;
        }
        #hourHandContainer {
            position: absolute;
            width: 6px;
            height: 280px;
            left: calc(50% - 3px);
            top: 60px;
            transform: rotate(20deg);
        }
        .hourHand {
            background-color: #444;
            width: 100%;
            height: 50%;
            box-shadow: 0 0 4px 2px #0000001a;
        }
        #minuteHandContainer {
            position: absolute;
            width: 5px;
            height: 360px;
            left: calc(50% - 2.5px);
            top: 20px;
            transform: rotate(0deg);
        }
        .minuteHand {
            background-color: #444;
            width: 100%;
            height: 50%;
            box-shadow: 0 0 4px 2px #0000001a;
        }
        .centerCircle {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 15px;
            height: 15px;
            background-color: #444;
            box-shadow: 0 0 4px 2px #0000001a;
            border-radius: 15px;
            z-index: 10;
        }
    </style>
</head>

<body>
    <div class="clockRidge"></div>
    <div class ="clockFace">
        <div class="n12">12</div>
        <div class="n9">9</div>
        <div class="n6">6</div>
        <div class="n3">3</div>
        <div class="centerCircle"></div>
        <div id="hourHandContainer">
            <div class="hourHand"></div>
        </div>
        <div id="minuteHandContainer">
            <div class="minuteHand"></div>
        </div>
    </div>
    <div class="clockBottom"></div>
    <p id="tz"></p>

    <script type = "text/javascript">
        document.getElementById("tz").innerHTML = "Your time zone is " + Intl.DateTimeFormat().resolvedOptions().timeZone + ".";
        function moveHands() {
            var dt = new Date();
            let hoursRot = (dt.getHours() * 30);
            let mintutesRot = (dt.getMinutes() * 6);
            document.getElementById("minuteHandContainer").style.transform = 'rotate('+mintutesRot+'deg)';
            document.getElementById("hourHandContainer").style.transform = 'rotate('+hoursRot+'deg)';
            console.log(hoursRot);
        }

        setInterval(moveHands, 5000); 
        moveHands();
     </script>  
</body>
</html>`}
      />
      <h3 style={{ textAlign: "center" }}>Your Lucky Powerball Numbers</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={powerballStyle}>
          {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
        </div>
        <div style={powerballStyle}>
          {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
        </div>
        <div style={powerballStyle}>
          {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
        </div>
        <div style={powerballStyle}>
          {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
        </div>
        <div style={powerballStyle}>
          {Math.floor(Math.random() * (69 - 1 + 1)) + 1}
        </div>
        <div
          style={{
            backgroundColor: "#f00",
            width: 30,
            maxHeight: 30,
            borderRadius: 15,
            marginRight: 10,
            textAlign: "center",
            paddingTop: 5,
          }}
        >
          {Math.floor(Math.random() * (26 - 1 + 1)) + 1}
        </div>
      </div>
    </div>
  );
};

export default Custom404;
