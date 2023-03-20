import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'NewCode',

  projectId: 'z7q31aw4',
  dataset: 'production',

  plugins: [deskTool(), media(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
