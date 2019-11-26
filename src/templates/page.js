import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
query($slug:String!){
  wordpressPage (slug: {eq: $slug}){
    title
    date(formatString: "MMMM Do,YYYY")
    slug
    status
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

const Page = (props) => {
  const { title, date, content } = props.data.wordpressPage
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": (node) => {
  //       const alt = node.data.target.fields.title['en-US']
  //       const url = node.data.target.fields.file['en-US'].url
  //       return <img src={url} alt={alt} />
  //     }
  //   }
  // }

  console.log(content)
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  )

}

export default Page