import Head from "next/head";
import Image from "next/image";
import computer from "../public/images/computer.png";
import huojian from "../public/images/huojian.png";
import bin from "../public/images/bin.png";
import logo from "../public/images/logo.png";
import longduan from "../public/images/longduan.png";
import code from "../public/images/code.png";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" md:w-full  w-[58rem] m-auto border-l-2 border-r-2">
        <div className=" md:w-3/4 m-auto flex flex-row  justify-between">
          <Image className=" w-60 my-5 " src={logo} alt="logo"></Image>
          <div className=" inline-flex items-center justify-around w-96 text-white px-5 font-mono font-bold mr-2">
            <span className="text-4xl">股份</span>
            <span className=" text-center">
              <Image src={computer} className=" rounded-full w-16"></Image>
              <div className=" mt-3">登录</div>
            </span>
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
                    <span className="font-bold  text-5xl text-purple-800">
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
                <div className=" w-full">
                  <Image
                    className=" md:w-5/12 md:mr-6 shrink-0 w-3/4 m-auto"
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
                    的消费品 但有一点不一样，咕咚平台将会记录每一位用
                    户在平台上所做的任何贡献（例如：邀请来好友或者买卖商品等），
                    并将这些贡献直接转化成咕咚的
                    <span className="font-bold text-purple-800">原始股份</span>
                    ，<span className="font-bold">免费赠送</span>
                    予您。
                  </p>
                </div>
                <div className=" w-full">
                  <Image
                    className=" md:w-5/12 md:mr-6 shrink-0 w-3/4 m-auto"
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
                    className=" md:w-5/12 md:mr-6 shrink-0 w-3/4 m-auto"
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
                  <div className=" w-full">
                    <Image
                      className=" md:w-5/12 md:mr-6 shrink-0 w-3/4 m-auto"
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
                             flex flex-col justify-between items-center p-6
                  shadow-2xl"
              >
                <div className=" p-2 mr-6 w-full rounded-md text-black">
                  <p className="  font-bold  text-4xl">
                    咕咚原始股份免费申请方式如下：
                  </p>
                  <p className=" text-4xl">
                    备注：空投份额为200万股（占总股份的2%），每人最多可申请200股。
                  </p>
                  <div className=" mt-5 border-b-2 border-gray-400 border-dashed pb-5">
                    <div className=" font-bold">
                      1、请完成以下信息
                      <span className=" font-bold text-fuchsia-400">
                        （+50股）
                      </span>
                    </div>
                    <div>
                      <form action="">
                        <div
                          style={{
                            "background-color": "rgba(254,226,226,0.3)",
                          }}
                          className=" shadow-2xl p-2 mt-2 rounded-md text-gray-700"
                        >
                          <label className=" block">
                            咕咚平台上线后将主营年轻人的消费品，届时您主要是个买家还是卖家？
                          </label>
                          <div className=" text-left mt-3">
                            <input
                              className=" ml-2 text-4xl"
                              type="radio"
                              name="sex"
                              value="male"
                            />
                            <span className="text-4xl mr-16 px-3 ">买家</span>
                            <input
                              className="text-4xl"
                              type="radio"
                              name="sex"
                              value="female"
                            />
                            <span className="text-4xl px-3">卖家</span>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                              }}
                              className=" ml-3 block bg-indigo-600 px-3 py-1 mt-2 shadow-2xl rounded-md font-bold text-white"
                            >
                              提交
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className=" mt-5 border-b-2 border-gray-400 pb-5 border-dashed text-black">
                    <div className=" font-bold">
                      2、请完成以下分享
                      <span className=" font-bold text-fuchsia-400">
                        （+50股）
                      </span>
                    </div>
                    <div>
                      <form action="">
                        <div>
                          <label className="">
                            <p>
                              请将以下内容分享至2个以上微信群，总人数达500人以上并截图上传。
                            </p>
                            <div
                              style={{
                                "background-color": "rgba(254,226,226,0.3)",
                              }}
                              className=" shadow-2xl p-2 mt-2 rounded-md text-gray-700"
                            >
                              <p>
                                一个即将打破阿里/京东等巨头垄断的新电商平台
                                (“咕咚”)
                                即将面世！人人皆可免费入股！本轮空投参与瓜分50万原始股份！限1万人，先到先得！
                                <a
                                  href="https://www.gudong.shop/"
                                  className=" text-blue-500 underline-offset-1"
                                >
                                  https://www.gudong.shop/
                                </a>
                                <button className=" ml-3 rounded-md flex flex-row justify-between bg-indigo-500 text-white font-bold px-3 py-1 mt-3">
                                  <svg
                                    t="1669548772173"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="3657"
                                    width="50"
                                    height="50"
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
                                  <span>复制</span>
                                </button>
                              </p>
                            </div>
                            <div>
                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader mt-5 ml-3"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                              >
                                {imageUrl ? (
                                  <img src={imageUrl} alt="avatar" />
                                ) : (
                                  uploadButton
                                )}
                              </Upload>
                            </div>
                            <button className=" ml-3 rounded-md block text-center bg-indigo-500 text-white font-bold px-3 py-1 mt-3">
                              上传截图
                            </button>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className=" mt-5 pb-5 ">
                    <div className=" font-bold text-black">
                      3、请完成以下分享
                      <span className=" font-bold text-fuchsia-400">
                        （+100股）
                      </span>
                    </div>
                    <div>
                      <form action="">
                        <div>
                          <label className=" block">
                            <p>
                              请将以下内容分享至3个以上微信群，总人数达1000人以上并截图上传。
                            </p>
                            <div
                              style={{
                                "background-color": "rgba(254,226,226,0.3)",
                              }}
                              className=" shadow-2xl p-2 mt-2 rounded-md text-gray-700"
                            >
                              <p>
                                一个即将打破阿里/京东等巨头垄断的新电商平台
                                (“咕咚”)
                                将于X日X点正式上线！人人皆可免费入股！本轮空投参与瓜分100万原始股份！限1万人，先到先得！
                                <a
                                  href="https://www.gudong.shop/"
                                  className=" text-blue-500 underline-offset-1"
                                >
                                  https://www.gudong.shop/
                                </a>
                                <button className=" ml-3 rounded-md flex flex-row justify-between bg-indigo-500 text-white font-bold px-3 py-1 mt-3">
                                  <svg
                                    t="1669548772173"
                                    class="icon"
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    p-id="3657"
                                    width="50"
                                    height="50"
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
                                  <span>复制</span>
                                </button>
                              </p>
                            </div>
                            <div>
                              <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader mt-5 ml-3"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                              >
                                {imageUrl ? (
                                  <img src={imageUrl} alt="avatar" />
                                ) : (
                                  uploadButton
                                )}
                              </Upload>
                            </div>
                            <button className=" ml-3 rounded-md block text-center bg-indigo-500 text-white font-bold px-3 py-1 mt-3">
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
          <div className=" mt-10 rounded-md text-4xl">
            <div class={styles.box}>
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
                      本平台实现盈利后，持有该“积分”者皆可获得永久性分红，按年/季/月/周/日进行；
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
          <div className=" mt-10 rounded-md text-4xl">
            <div class={styles.box}>
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
                    <h3 className="flex font-bold ml-7  items-center mb-1 text-purple-800 dark:text-white">
                      官网推出并空投
                    </h3>
                    <p class="mb-4 ml-7 text-white dark:text-gray-400">
                      范德萨范德萨范德萨范德萨
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
                    <h3 className="mb-1 ml-7 text-4xl  font-bold text-purple-800 dark:text-white">
                      小程序/app上线
                    </h3>
                    <p class="mb-4 ml-7  text-white dark:text-gray-400">
                      放大范德萨范德萨范德萨
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
                    <h3 className="mb-1 ml-7 text-4xl  font-bold text-purple-800 dark:text-white">
                      小程序/app上线
                    </h3>
                    <p class="mb-4 ml-7  font-normal text-white dark:text-gray-400">
                      范德萨范德萨范德萨
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
                    <h3 className="mb-1 text-4xl  ml-7 font-bold text-purple-800 dark:text-white">
                      盈利并开始分红
                    </h3>
                    <p class="mb-4 ml-7 text-4xl font-normal text-white dark:text-gray-400">
                      反对撒飞洒范德萨
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
                    <h3 className="mb-1 text-4xl ml-7  font-bold text-purple-800 dark:text-white">
                      治理性NFT发布
                    </h3>
                    <p class="mb-4 ml-7  text-4xl font-normal text-white dark:text-gray-400">
                      范德萨范德萨富士达范德萨
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
                    <h3 className="mb-1 text-4xl ml-7  font-bold text-purple-800 dark:text-white">
                      在线化社区治理
                    </h3>
                    <p class="mb-4 text-4xl ml-7 font-normal text-white dark:text-gray-400">
                      范德萨范德萨范德萨
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
                    <h3 className="mb-2 text-4xl ml-7 font-bold text-purple-800 dark:text-white">
                      进入到上市程序
                    </h3>
                    <p class="mb-4 text-4xl ml-7 font-normal text-white dark:text-gray-400">
                      范德萨范德萨发发生
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className=" mt-10 rounded-md ">
            <div class={styles.box}>
              <div
                style={{ "background-color": "rgba(254,226,226,0.3)" }}
                className="flex flex-col justify-start items-start p-5
                  shadow-2xl"
              >
                <div className=" ml-5 font-bold text-4xl">
                  联系方式
                  <div className=" mt-1 text-3xl font-bold">
                    <svg
                      t="1669554731645"
                      className=" inline-block icon mr-2"
                      viewBox="0 0 1206 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="6738"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M982.749557 0.001605H223.417832A224.340714 224.340714 0 0 0 0 222.536679v578.888121a224.340714 224.340714 0 0 0 223.417832 222.535075h759.331725a224.340714 224.340714 0 0 0 223.417831-222.535075V222.536679A222.615325 222.615325 0 0 0 982.749557 0.001605zM223.417832 88.758833h759.331725a132.413586 132.413586 0 0 1 114.357187 64.922782l-437.366085 353.704775a88.275724 88.275724 0 0 1-111.708916 0L110.665657 153.681615a128.722055 128.722055 0 0 1 112.752175-64.922782z m759.331725 845.159803H223.417832a134.540228 134.540228 0 0 1-134.299476-133.777846V253.031929l401.614417 324.573786a177.434205 177.434205 0 0 0 111.708916 39.724076 174.745808 174.745808 0 0 0 111.708916-39.724076l401.614417-324.573786v547.108861a131.731455 131.731455 0 0 1-133.015465 133.777846z"
                        p-id="6739"
                        fill="#f4ea2a"
                      ></path>
                    </svg>
                    123456789@qq.com
                  </div>
                </div>
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
                      <p className=" text-center  mt-1">微信③群</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mb-40"></div>
      </div>
    </div>
  );
}
