import { usePosts } from "./PostProvider";
import Results from "./Results";
import SearchPosts from "./SearchPost";

export default function Header() {
  // 3) CONSUMING THE CONTEXT VALUE
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
