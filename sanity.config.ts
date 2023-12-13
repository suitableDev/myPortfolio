/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/admin',
  title: 'Portfolio Admin',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
