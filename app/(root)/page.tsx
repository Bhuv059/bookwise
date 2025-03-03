import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[6]} />

      <BookList
        title="latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};
export default Home;
