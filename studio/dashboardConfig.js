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
                  buildHookId: '5e1336cb6da219aece8270b6',
                  title: 'Sanity Studio',
                  name: 'torrilanweb-studio',
                  apiId: 'dfa5b6d8-cedd-44b0-af44-aaa8badcf37d'
                },
                {
                  buildHookId: '5e1336cb623d1bc198a1e90a',
                  title: 'Landing pages Website',
                  name: 'torrilanweb',
                  apiId: '2d635945-2d59-4907-b2da-c52283bf14cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muffeeee/torrilanweb',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://torrilanweb.netlify.com', category: 'apps'}
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
