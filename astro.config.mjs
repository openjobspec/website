import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://openjobspec.org',
  integrations: [
    starlight({
      title: 'Open Job Spec',
      description:
        'A universal, language-agnostic standard for background job processing.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/openjobspec/openjobspec',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Quickstart', slug: 'getting-started/quickstart' },
            { label: 'Core Concepts', slug: 'getting-started/concepts' },
          ],
        },
        {
          label: 'Specification',
          items: [
            { label: 'Core', slug: 'spec/core' },
            { label: 'JSON Format', slug: 'spec/json-format' },
            { label: 'HTTP Binding', slug: 'spec/http-binding' },
            { label: 'gRPC Binding', slug: 'spec/grpc-binding' },
            { label: 'Retry', slug: 'spec/retry' },
            { label: 'Workflows', slug: 'spec/workflows' },
            { label: 'Unique Jobs', slug: 'spec/unique-jobs' },
            { label: 'Scheduling', slug: 'spec/scheduling' },
          ],
        },
        {
          label: 'Tutorials',
          items: [
            {
              label: 'Your First Job (Go)',
              slug: 'tutorials/your-first-job-go',
            },
            {
              label: 'Your First Job (TypeScript)',
              slug: 'tutorials/your-first-job-typescript',
            },
            {
              label: 'Your First Job (Python)',
              slug: 'tutorials/your-first-job-python',
            },
            {
              label: 'Workflow Patterns',
              slug: 'tutorials/workflow-patterns',
            },
          ],
        },
        {
          label: 'Guides',
          items: [
            {
              label: 'Implement a Backend',
              slug: 'guides/implement-a-backend',
            },
            { label: 'Implement an SDK', slug: 'guides/implement-an-sdk' },
            {
              label: 'Migrate from Sidekiq',
              slug: 'guides/migrate-from-sidekiq',
            },
            {
              label: 'Migrate from BullMQ',
              slug: 'guides/migrate-from-bullmq',
            },
            {
              label: 'Migrate from Celery',
              slug: 'guides/migrate-from-celery',
            },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'HTTP API', slug: 'reference/http-api' },
            { label: 'JSON Schemas', slug: 'reference/json-schemas' },
            { label: 'Error Codes', slug: 'reference/error-codes' },
            { label: 'Events', slug: 'reference/events' },
          ],
        },
        {
          label: 'Ecosystem',
          items: [
            { label: 'Backends', slug: 'ecosystem/backends' },
            { label: 'SDKs', slug: 'ecosystem/sdks' },
            { label: 'Tools', slug: 'ecosystem/tools' },
          ],
        },
        {
          label: 'Governance',
          items: [
            { label: 'RFC Process', slug: 'governance/rfc-process' },
            { label: 'Contributing', slug: 'governance/contributing' },
          ],
        },
      ],
    }),
  ],
});
