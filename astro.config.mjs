import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://openjobspec.org',
  output: 'static',
  adapter: vercel(),
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
            { label: 'Why OJS?', slug: 'getting-started/comparison' },
          ],
        },
        {
          label: 'Specification',
          items: [
            { label: 'Core', slug: 'spec/core' },
            { label: 'JSON Format', slug: 'spec/json-format' },
            { label: 'Protobuf Format', slug: 'spec/protobuf-format' },
            { label: 'HTTP Binding', slug: 'spec/http-binding' },
            { label: 'gRPC Binding', slug: 'spec/grpc-binding' },
            { label: 'AMQP Binding', slug: 'spec/amqp-binding' },
            { label: 'Retry', slug: 'spec/retry' },
            { label: 'Workflows', slug: 'spec/workflows' },
            { label: 'Unique Jobs', slug: 'spec/unique-jobs' },
            { label: 'Scheduling', slug: 'spec/scheduling' },
            { label: 'Middleware', slug: 'spec/middleware' },
            { label: 'Events', slug: 'spec/events' },
            { label: 'Errors', slug: 'spec/errors' },
            { label: 'Dead Letter Queue', slug: 'spec/dead-letter' },
            { label: 'Priority', slug: 'spec/priority' },
            { label: 'Timeouts', slug: 'spec/timeouts' },
            { label: 'Rate Limiting', slug: 'spec/rate-limiting' },
            { label: 'Results', slug: 'spec/results' },
            { label: 'Progress', slug: 'spec/progress' },
            { label: 'Bulk Operations', slug: 'spec/bulk-operations' },
            { label: 'Worker Protocol', slug: 'spec/worker-protocol' },
            { label: 'Graceful Shutdown', slug: 'spec/graceful-shutdown' },
            { label: 'Observability', slug: 'spec/observability' },
            { label: 'Webhooks', slug: 'spec/webhooks' },
            { label: 'Queue Configuration', slug: 'spec/queue-config' },
            { label: 'Fair Scheduling', slug: 'spec/fair-scheduling' },
            { label: 'Backpressure', slug: 'spec/backpressure' },
            { label: 'Structured Logging', slug: 'spec/logging' },
            { label: 'Delivery Guarantees', slug: 'spec/delivery-guarantees' },
            { label: 'Security', slug: 'spec/security' },
            { label: 'Encryption', slug: 'spec/encryption' },
            { label: 'Payload Limits', slug: 'spec/payload-limits' },
            { label: 'Admin API', slug: 'spec/admin-api' },
            { label: 'Disaster Recovery', slug: 'spec/disaster-recovery' },
            { label: 'Multi-Tenancy', slug: 'spec/multi-tenancy' },
            { label: 'Job Versioning', slug: 'spec/job-versioning' },
            { label: 'CloudEvents Interop', slug: 'spec/cloudevents-interop' },
            { label: 'Framework Adapters', slug: 'spec/framework-adapters' },
            { label: 'Testing', slug: 'spec/testing' },
            { label: 'Extension Lifecycle', slug: 'spec/extension-lifecycle' },
            {
              label: 'Extension Interactions',
              slug: 'spec/extension-interactions',
            },
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
              label: 'Your First Job (Java)',
              slug: 'tutorials/your-first-job-java',
            },
            {
              label: 'Your First Job (Rust)',
              slug: 'tutorials/your-first-job-rust',
            },
            {
              label: 'Your First Job (Ruby)',
              slug: 'tutorials/your-first-job-ruby',
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
            { label: 'Conformance', slug: 'reference/conformance' },
            { label: 'SDK Guidelines', slug: 'reference/sdk-guidelines' },
            { label: 'Migration Guide', slug: 'reference/migration' },
            { label: 'Glossary', slug: 'reference/glossary' },
          ],
        },
        {
          label: 'Ecosystem',
          items: [
            { label: 'Backends', slug: 'ecosystem/backends' },
            { label: 'SDKs', slug: 'ecosystem/sdks' },
            {
              label: 'Framework Integrations',
              slug: 'ecosystem/integrations',
            },
            { label: 'Tools', slug: 'ecosystem/tools' },
          ],
        },
        {
          label: 'Governance',
          items: [
            { label: 'RFC Process', slug: 'governance/rfc-process' },
            { label: 'Contributing', slug: 'governance/contributing' },
            {
              label: 'Architecture Decisions',
              slug: 'governance/adrs',
            },
          ],
        },
      ],
    }),
  ],
});
