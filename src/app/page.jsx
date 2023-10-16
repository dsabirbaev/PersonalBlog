import Intro from "../components/Intro/page";
import VideoSection from "../components/VideoSection/page";
import Course from "../components/Course/page";
import Lesson from "../components/Lesson/page";
import Feedback from "../components/Feedback/page";
const page = () => {
  return (
    <div>
        <Intro/>
        <VideoSection/>
        <Course/>
        <Lesson/>
        <Feedback/>
    </div>
  );
};

export default page;
