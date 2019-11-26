import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
query($slug:String!){
  wordpressPost (slug: {eq: $slug}){
    title
    date(formatString: "MMMM Do,YYYY")
    content
  }
}
`
// export const query = graphql`
// query (
//     $slug: String!
//   ) {
//     markdownRemark(
//       fields:{
//         slug: { 
//           eq:$slug}
//       }
//     ){
//           frontmatter{
//             title
//             date
//           }
//           html
//         }
//       }
// `

const Blog = (props) => {
  const { title, date, content } = props.data.wordpressPost
  console.log("Title", title)
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       const alt = node.data.target.fields.title['en-US']
  //       const url = node.data.target.fields.file['en-US'].url
  //       return <img src={url} alt={alt} />
  //     }
  //   }
  // }

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  )

}

export default Blog