import Head from "next/head";
import Image from "next/image";
import computer from "../public/images/computer.png";
import huojian from "../public/images/huojian.png";
import bin from "../public/images/bin.png";
import logo from "../public/images/logo.png";
import longduan from "../public/images/longduan.png";
import code from "../public/images/code.png";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineCloseCircle, AiOutlinePlus } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [uploadElements, setUploadElements] = useState([]);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setUploadElements([getUploadImgEle()]);
  }, []);

  useEffect(() => {
    setFileList([]);
    setUploadElements([getUploadImgEle()]);
  }, [isUploadModalOpen]);

  function openLoginModalOpen(event) {
    event.preventDefault();
    setIsLoginModalOpen(true);
  }

  function closeLoginModalOpen(event) {
    event.preventDefault();
    console.log("close");
    setIsLoginModalOpen(false);
  }

  function openUploadModal(event) {
    event.preventDefault();
    setIsUploadModalOpen(true);
  }

  function closeUploadModal() {
    setIsUploadModalOpen(false);
  }

  function loginHandle() {
    setIsLogin(true);
    setIsLoginModalOpen(false);
  }

  function getUploadImgEle(previewImage) {
    return (
      <div className=" mr-10 rounded-md mt-10" key={previewImage}>
        {previewImage ? (
          <div>
            <img
              src={previewImage}
              className=" rounded-md w-44 h-44"
              alt="logo"
            />
          </div>
        ) : (
          <>
            <input
              onChange={fileUploadHandler}
              className=" hidden"
              accept="image/*"
              type="file"
            />
            <div className=" w-44 h-44 border-4  border-dashed flex flex-col justify-center items-center">
              <AiOutlinePlus className=" text-5xl" />
              <div className=" text-xl">最少2张，最多9张</div>
            </div>
          </>
        )}
      </div>
    );
  }

  function fileUploadHandler(event) {
    // push element
    if (fileList.length + 1 > 9) {
      alert("最多9张");
      return;
    }
    fileList.push(event.target.files[0]);
    const ele = [];
    for (let i = 0; i < fileList.length; i++) {
      var URL = window.URL || window.webkitURL;
      var imgURL = URL.createObjectURL(fileList[i]);
      ele.push(getUploadImgEle(imgURL));
    }
    if (ele.length < 9) {
      ele.push(getUploadImgEle());
    }
    setFileList(fileList);
    setUploadElements(ele);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta content="yes" name="apple-mobile-web-app-capable"></meta>
        {/* <meta name="viewport" content="viewport-fit=cover"></meta> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" md:w-full  w-[58rem] m-auto">
        <div className=" md:w-3/4 m-auto flex flex-row  justify-between items-center">
          <Image className=" w-60 my-10 ml-6" src={logo} alt="logo"></Image>
          <div className=" md:mr-1 mr-8 flex flex-row justify-between items-center">
            <div
              // style={{ "background-color": "rgba(254,226,226,0.3)" }}
              className=" rounded-md flex h-52 flex-col justify-center items-center"
            >
              <RxAvatar className=" text-8xl text-gray-400" />
              <div
                hidden={!isLogin}
                className="text-center text-2xl text-gray-400 font-bold"
              >
                <div>ID: GD99999</div>
                <div>股份: xx</div>
              </div>
              <div
                hidden={isLogin}
                style={{ "background-color": "rgba(254,226,226,0.3)" }}
                className=" bg-indigo-600 mt-3 rounded-md"
              >
                <div
                  className=" w-full rounded-md"
                  style={{ "background-color": "rgba(254,226,226,0.3)" }}
                >
                  <button
                    onClick={openLoginModalOpen}
                    className="  px-4 text-3xl"
                  >
                    登录
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-3/4 clear-both flex flex-col  w-[54rem] m-auto">
          <div className=" mt-5 rounded-md">
            <div class={styles.box}>
              <div
                style={{ "background-color": "rgba(254,226,226,0.3)" }}
                className=" md:flex md:flex-row md:justify-between md:items-center
                             flex flex-col justify-between items-start
                  shadow-2xl"
              >
                <div className=" md:ml-6 md:w-96 md:text-xl mt-5 md:text-center text-left font-bold text-white px-5 text-4xl">
                  <p>
                    这是一场
                    <span className="font-bold text-5xl">真实的</span>
                    社会实验
                  </p>
                  <p>
                    中国将出现一个
                    <span className="font-bold  text-5xl text-cyan-300">
                      全新的
                    </span>
                    电子商务平台
                  </p>
                  <p className="">
                    它的名字叫
                    <span className="font-bold text-5xl text-fuchsia-400">
                      {" "}
                      咕咚！
                    </span>
                  </p>
                </div>
                <div className="">
                  <Image
                    className=" md:w-5/12 md:mr-6 shrink-0 m-auto"
                    src={computer}
                    alt="computer"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 rounded-md">
            <div class={styles.box}>
              <div
                style={{ "background-color": "rgba(254,226,226,0.3)" }}
                className=" md:flex md:flex-row md:justify-between md:items-center
                             flex flex-col justify-between items-center  
                  shadow-2xl"
              >
                <div className=" md:ml-6 md:w-96 md:text-xl mt-5 md:text-center text-left text-white px-5 text-4xl">
                  <p>
                    咕咚平台主营
                    <span className="font-bold">年轻人</span>
                    的消费品但有一点不一样，咕咚平台将会记录每一位用户在平台上所做的任何贡献（例如：邀请来好友或者买卖商品等），并将这些贡献直接转化成咕咚的
                    <span className="font-bold text-purple-800">原始股份</span>
                    ，<span className="font-bold">免费赠送</span>
                    予您。
                  </p>
                </div>
                <div className=" w-full">
                  <Image
                    className=" md:w-5/12 md:mr-6 shrink-0 m-auto"
                    src={longduan}
                    alt="loongduan"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 rounded-md">
            <div class={styles.box}>
              <div
                style={{ "background-color": "rgba(254,226,226,0.3)" }}
                className=" md:flex md:flex-row md:justify-between md:items-center
                             flex flex-col justify-between items-center  
                  shadow-2xl"
              >
                <div className=" md:ml-6 md:w-96 md:text-xl mt-5 md:text-center text-left text-white px-5 text-4xl">
                  咕咚平台有可能，在未来
                  <span className="font-bold">5年内</span>
                  ，超越阿里巴巴，甚至超越亚马逊，也就是: 市值将达
                  <span className="font-bold text-purple-800">万亿</span>
                  级别--咕咚的原始股份的总量为1亿股（永无增发）
                  也就是未来每1股的价值将达
                  <span className="font-bold">万元</span>
                  以上！或许您也认为这不可能，但
                  <span className="font-bold">万一</span>呢？
                </div>
                <div className=" w-full">
                  <Image
                    className=" md:w-5/12 md:mr-6 shrink-0 m-auto"
                    src={huojian}
                    alt="computer"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 rounded-md">
            <div class={styles.box}>
              <div
                style={{ "background-color": "rgba(254,226,226,0.3)" }}
                className=" md:flex md:flex-row md:justify-between md:items-center
                             flex flex-col justify-between items-center  
                  shadow-2xl"
              >
                <div className=" md:ml-6 md:w-96 md:text-xl mt-5 md:text-center text-left text-white px-5 text-4xl">
                  <p>
                    咕咚平台小程序与APP产品正在
                    <span className="font-bold">同步开发中</span>
                    ，待平台上线之后，咕咚的股份将以
                    <span className="font-bold text-fuchsia-400">“积分”</span>
                    的形式显示在平台上。
                  </p>
                  <div className="">
                    <Image
                      className=" md:w-5/12 md:mr-6 shrink-0 m-auto"
                      src={bin}
                      alt="computer"
                    ></Image>
                  </div>
                  <p className=" pb-5">
                    咕咚“积分”的总量固定为
                    <span className="font-bold">1亿份</span>
                    ，其中创始团队仅占比
                    <span className=" font-bold">10%</span>
                    ；预留
                    <span className=" font-bold">28%</span>
                    用于对接金融机构投资，以及团队后续扩员；
                    <span className=" font-bold">2%</span>
                    <span className="font-bold text-purple-800">免费空投</span>
                    给最早来到这里的
                    <span className="font-bold">前1万名</span>
                    用户；剩余
                    <span className=" font-bold">60%</span>
                    将分阶段、分批次免费赠予全生态用户！
                    <span className="font-bold">早来者</span>
                    会获得
                    <span className="font-bold">多</span>
                    一些，晚来者会获得少一些。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 rounded-md text-4xl">
            <div class={styles.box}>
              <div
                style={{ "background-color": "rgba(254,226,226,0.3)" }}
                className=" md:flex md:flex-row md:justify-between md:items-center
                             flex flex-col justify-between items-center
                  shadow-2xl"
              >
                <div style={{ "background-color": "rgba(254,226,226,0.3)" }}>
                  <div className=" p-6 mr-6 w-full rounded-md text-black">
                    <div className=" pb-4 mb-4 border-gray-400 border-dashed">
                      <p className="  font-bold text-start text-5xl">
                        <span className=" text-purple-800">
                          咕咚股份免费申请
                        </span>
                      </p>
                      {/* <p className=" text-4xl font-bold text-center mt-2">
                        【空投份额为200万股（占总股份的2%），每人最多可申请200股】
                      </p> */}
                    </div>
                    <div
                      style={{
                        "background-color": "rgba(254,226,226,0.3)",
                      }}
                      className=" mt-10 rounded-md shadow-2xl border-gray-400 pb-5 text-black"
                    >
                      <div className=" font-bold p-5">
                        1、请完成以下信息
                        <span className=" font-bold text-purple-800">
                          （+50股）
                        </span>
                      </div>
                      <div className=" p-5">
                        <form action="">
                          <div className=" mt-2 text-gray-700">
                            <label className=" block">
                              咕咚平台上线后将主营年轻人的消费品，届时您主要是个买家还是卖家？
                            </label>
                            <div className=" text-left mt-3">
                              <input
                                className=" ml-2 text-9xl"
                                type="radio"
                                name="sex"
                                value="male"
                              />
                              <span className="text-4xl mr-16 px-3 ">买家</span>
                              <input
                                className=" text-9xl"
                                type="radio"
                                name="sex"
                                value="female"
                              />
                              <span className="text-4xl px-3">卖家</span>
                              <button
                                onClick={(event) => {
                                  event.preventDefault();
                                }}
                                className=" mt-5 block bg-indigo-500 px-3 py-1 shadow-2xl rounded-md text-white"
                              >
                                提 交
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      style={{
                        "background-color": "rgba(254,226,226,0.3)",
                      }}
                      className=" mt-10 rounded-md shadow-2xl border-gray-400 pb-5 text-black"
                    >
                      <div className=" font-bold p-5">
                        2、请完成以下分享
                        <span className=" font-bold text-purple-800">
                          （+50股）
                        </span>
                      </div>
                      <div>
                        <form action="">
                          <div>
                            <label className="">
                              <p className=" p-5">
                                请将以下内容分享至2个以上微信群，总人数达500人以上并截图上传。
                              </p>
                              <div className=" mt-2 p-5 text-gray-700 ">
                                <p className=" bg-blue-400">
                                  一个即将打破阿里/京东等巨头垄断的新电商平台
                                  (“咕咚”)
                                  即将面世！本轮空投参与瓜分50万原始股份！限1万人，先到先得！
                                  <a
                                    href="https://www.gudong.shop/"
                                    className="  text-blue-600 underline-offset-1"
                                  >
                                    https://www.gudong.shop/
                                  </a>
                                </p>
                                <button className=" rounded-md flex flex-row justify-between bg-blue-400 text-white px-3 py-1 mt-8">
                                  <svg
                                    t="1669548772173"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="3657"
                                    width="45"
                                    height="45"
                                    className="inline"
                                  >
                                    <path
                                      d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z"
                                      p-id="3658"
                                      fill="#ffffff"
                                    ></path>
                                    <path
                                      d="M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-0.2L232 746.2v-0.2h150v150z"
                                      p-id="3659"
                                      fill="#ffffff"
                                    ></path>
                                  </svg>
                                  <span className=" shadow-2xl">复制</span>
                                </button>
                              </div>
                              <button
                                onClick={openUploadModal}
                                className=" shadow-2xl mb-5 ml-5 rounded-md block text-center bg-indigo-500 text-white px-3 py-1 mt-3"
                              >
                                上传截图
                              </button>
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      style={{
                        "background-color": "rgba(254,226,226,0.3)",
                      }}
                      className=" mb-7 mt-10 rounded-md shadow-2xl border-gray-400 pb-5 text-black"
                    >
                      <div className=" font-bold p-5">
                        3、请完成以下分享
                        <span className=" font-bold text-purple-800">
                          （+100股）
                        </span>
                      </div>
                      <div>
                        <form action="">
                          <div>
                            <label className="">
                              <p className=" p-5">
                                请将以下内容分享至3个以上微信群，总人数达1000人以上并截图上传。
                              </p>
                              <div className=" mt-2 p-5 text-gray-700 ">
                                <p className="  bg-blue-400">
                                  一个即将打破阿里/京东等巨头垄断的新电商平台
                                  (“咕咚”)
                                  将于X日X点正式上线！本轮空投参与瓜分100万原始股份！限1万人，先到先得！
                                  <a
                                    href="https://www.gudong.shop/"
                                    className=" text-blue-600 underline-offset-1"
                                  >
                                    https://www.gudong.shop/
                                  </a>
                                </p>
                                <button className=" rounded-md flex flex-row justify-between bg-blue-400 text-white px-3 py-1 mt-8">
                                  <svg
                                    t="1669548772173"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="3657"
                                    width="45"
                                    height="45"
                                    className="inline"
                                  >
                                    <path
                                      d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z"
                                      p-id="3658"
                                      fill="#ffffff"
                                    ></path>
                                    <path
                                      d="M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM382 896h-0.2L232 746.2v-0.2h150v150z"
                                      p-id="3659"
                                      fill="#ffffff"
                                    ></path>
                                  </svg>
                                  <span className=" shadow-2xl">复制</span>
                                </button>
                              </div>
                              <button className=" shadow-2xl ml-5 mb-5 rounded-md block text-center bg-indigo-500 text-white px-3 py-1 mt-3">
                                上传截图
                              </button>
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 rounded-md text-4xl">
            <div class={styles.box}>
              <div
                style={{ "background-color": "rgba(254,226,226,0.3)" }}
                className=" text-start text-white font-bold md:p-5 p-6 text-5xl "
              >
                咕咚平台路线图
              </div>
              <div
                style={{ "background-color": "rgba(254,226,226,0.3)" }}
                className=" md:flex md:flex-row md:justify-between md:items-center md:p-5
                             flex flex-col justify-between items-start  
                  shadow-2xl"
              >
                <ol className="relative border-l text-4xl ml-10 mt-5 border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        aria-hidden="true"
                        class=" w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="flex font-bold ml-7  items-center mb-1 text-cyan-300 dark:text-white">
                      官网推出并空投
                    </h3>
                    <p class="mb-4 ml-7 text-white dark:text-gray-400">
                      在此阶段，咕咚创始团队优先将官网推出，并将咕咚平台2%的原始股份（200万股）免费空投给最早来到这里的前1万名用户，携手1万名共同创始人，将咕咚的创新理念与宏大愿景传播到市场。
                    </p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        aria-hidden="true"
                        class=" w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="mb-1 ml-7 text-4xl  font-bold text-cyan-300 dark:text-white">
                      小程序/app上线
                    </h3>
                    <p class="mb-4 ml-7  text-white dark:text-gray-400">
                      在此阶段，咕咚平台将进入正常的商品交易状态，同时咕咚平台的原始股份（总量1亿股）将以“积分”的形式映射在咕咚小程序/app产品上，并开始面向全生态用户分批赠送余下的60%原始股份。
                    </p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        aria-hidden="true"
                        class=" w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="mb-1 ml-7 text-4xl  font-bold text-cyan-300 dark:text-white">
                      盈利并开始分红
                    </h3>
                    <p class="mb-4 ml-7  font-normal text-white dark:text-gray-400">
                      在此阶段，咕咚平台将从出售广告资源和收取商品交易/服务佣金等方面获得正常的商业收益，随即正式启动原始股东持股分红！追求按月/周/日进行，若平台收益不断增加，则分红周期将不断缩短。
                    </p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        aria-hidden="true"
                        class=" w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="mb-1 text-4xl  ml-7 font-bold text-cyan-300 dark:text-white">
                      治理性NFT发布
                    </h3>
                    <p class="mb-4 ml-7 text-4xl font-normal text-white dark:text-gray-400">
                      在此阶段，咕咚平台将推出基于Web3.0生态理念的新生物种——NFT（非同质化权益证明），为咕咚平台所有的原始股东及全生态用户提供一种全新的身份象征和权益证明，具体细则届时公布。
                    </p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        aria-hidden="true"
                        class=" w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="mb-1 text-4xl ml-7  font-bold text-cyan-300 dark:text-white">
                      在线化社区治理
                    </h3>
                    <p class="mb-4 ml-7  text-4xl font-normal text-white dark:text-gray-400">
                      在此阶段，咕咚平台所有的原始股东可参与咕咚平台的日常事务治理，例如：持有咕咚的股份或NFT即可在咕咚社区参与咕咚平台各种大小事务提案、投票等决策权益，咕咚平台将逐步实现多中心化治理。
                    </p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="flex absolute -left-3 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        aria-hidden="true"
                        class=" w-6 h-6 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="mb-1 text-4xl ml-7  font-bold text-cyan-300 dark:text-white">
                      进入到上市程序
                    </h3>
                    <p class="mb-4 text-4xl ml-7 font-normal text-white dark:text-gray-400">
                      在此阶段，咕咚平台的各项数据达到上市标准并正式启动上市登记，咕咚平台上市成功时将对应当前的“积分”比例发行总量为1亿份的咕咚股票，届时持有咕咚积分（原始股份）的所有用户届可按同等比例兑换成咕咚的股票。
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className=" mt-10 rounded-md text-4xl">
            <div class={styles.box}>
              <div
                style={{
                  "background-color": "rgba(254,226,226,0.3)",
                }}
              >
                <div
                  style={{ "background-color": "rgba(254,226,226,0.3)" }}
                  className=" md:flex md:justify-start md:items-start md:p-5
                             flex flex-col justify-between items-center text-black p-6
                  shadow-2xl"
                >
                  <p className=" font-bold text-5xl text-purple-800">
                    Q&A 常见问题解答
                  </p>
                  <div className="  mt-6">
                    <p className=" font-bold">Q: 本平台主营什么商品?</p>
                    <p className=" mt-1 ">
                      A:
                      本平台上线后将主营年轻人的消费品，如盲盒、手办、潮玩、服饰、化妆品等。
                    </p>
                  </div>
                  <div className="  mt-6 ">
                    <p className=" font-bold">Q: 本平台股份有何用途?</p>
                    <p className=" mt-1 ">
                      <span>A:</span>
                      本平台在此谈及的“股份”属于真正意义上的原始股，待平台小程序/APP上线后将以“积分”的形式显示在平台上，该“积分”将赋予以下五项功能和用户权益：
                    </p>
                    <ol>
                      <li className=" mt-3">
                        1.
                        本平台未来上市后，持有该“积分”可直接按同等比例换算成平台的股票；
                      </li>
                      <li className=" mt-3">
                        2.
                        本平台实现盈利后，持有该“积分”者皆可获得永久性分红，追求按年/季/月/周/日进行；
                      </li>
                      <li className=" mt-3">
                        3.
                        为了合规起见，本平台仅会开通股份“转赠”功能以支持用户间线下交易；
                      </li>
                      <li className=" mt-3">
                        4.
                        如果本平台上的卖家选择开通【“积分”支付】，则买家即可使用“积分”消费该卖家的商品，而本平台也会接受卖家使用“积分”抵扣交易佣金和广告费等；
                      </li>
                      <li className=" mt-3">
                        5.
                        持有该“积分”的用户即可参加本平台在中后期发展过程中的在线化治理（如：发表提案和参与投票等）。
                      </li>
                    </ol>
                  </div>
                  <div className="  mt-6">
                    <p className=" font-bold">Q: 本平台如何获得盈利?</p>
                    <p className=" mt-1 ">
                      A:
                      本平台属于一个轻模式、轻运营的第三方服务商，专注为经营新潮商品的供应商和年轻的消费者群体提供精细化的服务，从中收取适当比例的服务费用，以及平台广告费等，与淘宝、京东、拼多多等平台无异。
                    </p>
                  </div>
                  <div className="  mt-6">
                    <p className=" font-bold">Q: 本平台“积分”如何释放?</p>
                    <p className=" mt-1 ">
                      A:
                      本平台“积分”共有62%（6200万份）免费奖励给全生态用户，其中除了2%（200万份）提前奖励给最早期的1万名用户之外，余下的60%（6000万份）将均分三份，按阶段释放给全生态用户，主要奖励用户【注册/拉新】和【购物/售货】，具体分配细则详见平台上线后附带文档
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 rounded-md ">
            <div class={styles.box}>
              <div
                style={{
                  "background-color": "rgba(254,226,226,0.3)",
                }}
              >
                <div
                  style={{ "background-color": "rgba(254,226,226,0.3)" }}
                  className="flex flex-col justify-start items-start p-5
                  shadow-2xl"
                >
                  <div>
                    <p className=" ml-5 font-bold mt-3 text-4xl">加入社群</p>
                    <div className=" flex flex-row justify-start  mt-3 items-center">
                      <div>
                        <Image
                          className=" mx-5 w-20 rounded-md"
                          src={code}
                          alt="code"
                        ></Image>
                        <p className=" text-center mt-1">微信①群</p>
                      </div>
                      <div>
                        <Image
                          className=" mx-5 w-20 rounded-md"
                          src={code}
                          alt="code"
                        ></Image>
                        <p className=" text-center  mt-1">微信②群</p>
                      </div>
                      <div className=" text-center">
                        <Image
                          className=" mx-5 w-20 rounded-md"
                          src={code}
                          alt="code"
                        ></Image>
                        <p className=" text-center  mt-1">微信③群 </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-10"></div>
      </div>
      {isLoginModalOpen && (
        <div
          style={{ "background-color": "rgba(221,221,221,0.8)" }}
          className=" fixed top-0 left-0 right-0 bottom-0 w-full  flex flex-col justify-center"
        >
          <div className=" shadow-2xl relative w-4/6 m-auto bg-purple-500 opacity-80 pb-7 pt-7 rounded-3xl flex flex-col justify-center items-center">
            <div
              onClick={closeLoginModalOpen}
              className=" absolute right-4 top-4"
            >
              <AiOutlineCloseCircle className=" text-5xl text-white" />
            </div>
            <div className=" text-4xl w-11/12 flex flex-col justify-center items-center">
              <RxAvatar className=" text-9xl mb-6 text-gray-300" />
              <input
                placeholder="请输入手机号"
                className="  w-[34rem] px-6 py-4 rounded-3xl"
              />
              <div className=" mt-7 relative  w-[34rem]">
                <input
                  placeholder="验证码"
                  className="  px-6 py-4 rounded-3xl w-[34rem] p-5"
                />
                <div className=" absolute inline-block right-6 top-4 border-l-2 pl-5">
                  <button>获取验证码</button>
                </div>
              </div>
              <div className=" bg-purple-400  text-center w-[34rem] border-2 mt-7 p-3 rounded-3xl text-white">
                <button onClick={loginHandle}>登 录</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isUploadModalOpen && (
        <div
          style={{ "background-color": "rgba(221,221,221,0.8)" }}
          className=" fixed top-0 left-0 right-0 bottom-0 w-full  flex flex-col justify-center"
        >
          <div className=" shadow-2xl relative w-10/12 m-auto bg-white opacity-80 pb-7 pt-7 rounded-3xl flex flex-col justify-center items-start p-8">
            <label className="cursor-pointer flex flex-row flex-wrap">
              {uploadElements}
            </label>
            <div className=" text-4xl">
              <button className=" mt-5 w-40 rounded-2xl border-2 text-center py-1 inline-block">
                提交
              </button>
              <buton
                className=" ml-5 mt-5 w-40 rounded-2xl border-2 py-1 text-center inline-block"
                onClick={closeUploadModal}
              >
                取消
              </buton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
