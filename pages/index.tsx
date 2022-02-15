import { useInView } from 'react-intersection-observer';
import AnyTime from '../components/AnyTime/AnyTime';
import Bookmarks from '../components/Bookmarks/Bookmarks';
import CheckedBook from '../components/CheckedBook/CheckedBook';
import DownloadButton from '../components/DownloadButton/DownloadButton';
import DownloadNow from '../components/DownloadNow/DownloadNow';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Footer from '../components/Footer/Footer';
import InfiniteScrollBooks from '../components/InfiniteScrollBooks/InfiniteScrollBooks';
import Introduction from '../components/Introduction/Introduction';
import Layout from '../components/Layout/Layout';
import LiveVideo from '../components/LiveVideo/LiveVideo';
import MainImage from '../components/MainImage/MainImage';
import NavBar from '../components/NavBar/NavBar';
import ReadingDiary from '../components/ReadingDiary/ReadingDiary';
import SlideComments from '../components/SlideComments/SlideComments';

export default function index() {
  const { ref: LIVE_REF, inView: LIVE_INVIEW } = useInView({
    threshold: 0,
  });
  return (
    <>
      <Layout />
      <NavBar />
      <MainImage />
      <Introduction />
      <LiveVideo wRef={LIVE_REF} wInView={LIVE_INVIEW} />
      <CheckedBook />
      <AnyTime />
      <ReadingDiary />
      <InfiniteScrollBooks />
      <Bookmarks />
      <SlideComments />
      <DownloadNow />
      <Footer />
      <DownloadButton />
      <ErrorPage />
    </>
  );
}
