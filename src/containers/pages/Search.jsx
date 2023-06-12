import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page, search_blog, search_blog_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import { useParams } from "react-router-dom";
import BlogListSearch from "components/blog/search/BlogListSearch";

function Search({
    posts,
    count,
    next,
    previous,
    search_blog,
    search_blog_page
}){

    const params = useParams()
    const term = params.term

    useEffect(()=>{
        window.scrollTo(0,0)
        search_blog(term)
    },[])
 


    return(
        <Layout>
              <Helmet>
                <title> Blog</title>
                <meta name="description" content="Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad" />
                <meta name="keywords" content='Agencia de software, desarrollo de WebApps' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.CosmicImagination.com/" />
                <meta name="author" content='Cosmic_Imagination' />
                <meta name="publisher" content='Cosmic_Imagination' />
                {/* Social Media Tags */}
                <meta property="og:title" content='Co§mIc | Software Agency' />
                <meta property="og:description" content='Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad' />
                <meta property="og:url" content="https://www.CosmicImagination.com/" />
                <meta property="og:image" content='https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-la-alquimia-y-de-la-geometr%C3%ADa-sagrada-en-el-fondo-azul-de-la-acuarela-76843935.jpg' />

                <meta name="twitter:title" content='Co§mIc | Software Agenc' />
                <meta
                    name="twitter:description"
                    content='Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad'/>
                
                <meta name="twitter:image" content='https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-la-alquimia-y-de-la-geometr%C3%ADa-sagrada-en-el-fondo-azul-de-la-acuarela-76843935.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            
            </Helmet>
            <Navbar/>
            <div className="pt-28">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-full my-10">
                    {/* Content goes here */}
                    <BlogListSearch posts={posts&&posts} get_blog_list_page={search_blog} count={count&&count}/>
                    </div>
                </div>
            </div> 
                <Footer/>
        </Layout>
    )
}

const mapStateToProps=state=>({
    posts: state.blog.filtered_posts,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})

export default connect(mapStateToProps,{
    search_blog,
    search_blog_page
}) (Search)
