import ContentPageOne from "./components/ContentPageOne";
import ContentPageTwo from "./components/ContentPageTwo";
import SectionTrans from "./components/SectionTrans";

export default function Home() {
  return (
    <div>
      <SectionTrans
        sectionOne={<ContentPageOne />}
        sectionTwo={<ContentPageTwo />}
      />
    </div>
  );
}
