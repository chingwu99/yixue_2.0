import Image from "next/image";
//import img
import trend from "@/public/images/pages/home/trend.svg";
import social from "@/public/images/pages/home/social.svg";
import share from "@/public/images/pages/home/share.svg";
//
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type FeatureDataProp = {
  title: string;
  content: string;
  img: any;
};

interface SectionTwoProp {}

const featureDatas: FeatureDataProp[] = [
  {
    title: "分享學習成果",
    content:
      "展示你的學習成果，啟發他人學習。在溢學，你的進步將成為無限的啟發源。",
    img: trend,
  },
  {
    title: "掌握學習趨勢",
    content: "探索熱門話題，瞭解全球學習者的學習趨勢，成為學習領域的先驅者。",
    img: social,
  },
  {
    title: "透過交流加速成長",
    content:
      " 與志同道合的學習者交流，分享經驗與心得，互相鼓勵，一同踏上成長之路。",
    img: share,
  },
];

const SectionTwo: React.FC<SectionTwoProp> = async () => {
  return (
    <section className=" flex  bg-gray-300 pt-20 ">
      <div className="container mx-auto grid grid-cols-1 gap-6 py-5 sm:px-20 md:grid-cols-3 md:gap-3 md:px-3  lg:px-44 ">
        {featureDatas.map(({ title, content, img }) => (
          <Card key={title} className=" ">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="py-3">{content}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={img}
                alt=""
                className="mx-auto  h-auto w-full max-w-[15rem] xl:max-w-[10rem]"
              />
            </CardContent>
            {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
