export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d55bc3dc3fa55b140f5ea10',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9bav13uz',
                  apiId: '6c7b1e49-471c-4c93-87ef-1b3ce351aea7'
                },
                {
                  buildHookId: '5d55bc3d0a696ea535dc009b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-od4wggmc',
                  apiId: '31d29712-ccef-4d2e-9de2-8fc8feb293cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prasadheeramani/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-od4wggmc.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
