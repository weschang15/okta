import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Section from "../components/section/Section"
import { SectionTitle } from "../components/section/SectionTitle"
import SEO from "../components/seo"

const Article = styled.article`
  margin: 0 auto 2em;
  background: #fff;
  padding: 1em;
  max-width: 780px;
  width: 100%;
`

const ArticleTitle = styled.h1`
  font-size: 2em;
  color: #222;
`

const ArticleBody = styled.div`
  color: #222;
  p {
    color: inherit;
  }
`

const Posts = ({ data }) => {
  const articles = (data.gqlZero.posts || {}).data || []
  return (
    <Layout>
      <SEO title="Posts" />
      <Section>
        <SectionTitle>Posts</SectionTitle>
        {articles.map(article => {
          return (
            <Article key={article.id}>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleBody>
                <p>{article.body}</p>
              </ArticleBody>
            </Article>
          )
        })}
      </Section>
    </Layout>
  )
}

export default Posts

export const POSTS_QUERY = graphql`
  query GetPosts {
    gqlZero {
      posts {
        data {
          body
          title
          id
        }
      }
    }
  }
`
