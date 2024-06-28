import Button from "../../shared/Button/Button";
export default function DoubleBanner({ str1, str2 }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {[str1, str2].map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.img})`,
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "100%",
              }}
              className="flex items-center h-[100vh] w-full z-10 relative after:absolute after:content-[` `] after:left-0 after:w-full  after:bg-[#000000bd] after:-z-10 after:top-0 after:h-full"
            >
              <div className=" px-10">
                <h2 className="font-bold text-6xl">{item.ftitle}</h2>
                <h2 className="font-bold text-5xl">{item.stitle}</h2>
                <p className="text-1xl text-[--grayColor] md:w-4/5 mt-3">
                  {item.description}{" "}
                </p>
                <Button text={item.button} link={item.link} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
