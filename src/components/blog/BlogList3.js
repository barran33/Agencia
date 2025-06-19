import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid"
import SmallSetPagination from "components/pagination/SmallSetPagination"
import { get_blog_list_page } from "redux/actions/blog/blog"
import BlogCardCategories from "./BlogCardCategories"

function BlogList3({posts,list_page,count}){

    return(
    <div className="overflow-hidden px-8 bg-black">
      <ul role="list" className="divide-y space-y-8 gap-8  divide-gray-200">
        {posts&&posts.map((post,index) => (
          <BlogCardCategories data={post} key={index} index={index}/>
        ))}
      </ul>
    </div>
    )
}
export default BlogList3