export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec1a595e740ce93fa1ec61d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tni5hi6p',
                  apiId: '5b2d82a4-5525-40bc-8591-7b8859b6e87d'
                },
                {
                  buildHookId: '5ec1a59511c8e03efd26d7c0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5euosov3',
                  apiId: '2189246f-e700-4627-9267-3d8c4e3e97a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crs1138/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5euosov3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
