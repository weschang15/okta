/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
const POSTS_PER_PAGE = 6
const createPaginatedPagePath = (path, page) => {
  const pageParam = page === 0 ? `` : `/${page + 1}`
  return path + pageParam
}

async function createPostsArchive(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
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
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = (result.data.gqlZero.posts || {}).data || []
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const hasNextPage = posts.length > POSTS_PER_PAGE

  Array.from({ length: numPages }).forEach((_, i) => {
    const pagePath = "/posts"
    createPage({
      path: createPaginatedPagePath(pagePath, i),
      component: path.resolve("./src/templates/Posts.js"),
      context: {
        pagePath,
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numPages,
        currentPage: i + 1,
        hasNextPage,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  return await createPostsArchive(graphql, actions, reporter)
}
