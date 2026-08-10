import React from 'react';
import { Metadata } from 'next';
import { ServicePageLayout } from '@/components/service-page-layout';

export const metadata: Metadata = {
  title: 'Software Engineering Services South Africa | MuseCS Technical Excellence',
  description: 'Enterprise software engineering applying computer science fundamentals, Test-Driven Development (TDD), Domain-Driven Design (DDD), and automated CI/CD pipelines.',
  alternates: {
    canonical: 'https://www.musecs.com/software-development/software-engineering/'
  },
  openGraph: {
    title: 'Software Engineering Discipline & Craftsmanship | MuseCS',
    description: 'Rigorous software engineering applying computer science principles, TDD, clean architecture, and automated testing to build mission-critical systems.',
    url: 'https://www.musecs.com/software-development/software-engineering/',
    type: 'article'
  }
};

export default function SoftwareEngineeringPage() {
  return (
    <ServicePageLayout
      title="Software Engineering"
      subtitle="Applying Rigorous Computer Science Fundamentals, Test-Driven Development, and Clean Architecture to Build Resilient, High-Throughput Software Systems."
      canonicalUrl="/software-development/software-engineering/"
      category="Software Engineering"
      breadcrumbs={[
        { name: 'Software Development', url: '/software-development' },
        { name: 'Software Engineering', url: '/software-development/software-engineering' }
      ]}
      overview={[
        'Software engineering is the application of systematic, disciplined, and quantifiable computer science principles to the design, development, operation, and maintenance of software applications. It elevates software creation from informal programming into a predictable, measurable, and highly reliable engineering craft.',
        'As software applications become central to modern business infrastructure, system failures, security vulnerabilities, and unmanageable technical debt carry severe commercial consequences. Software engineering provides the mathematical, structural, and procedural frameworks required to guarantee sub-100ms response latencies, multi-region fault tolerance, and long-term code maintainability.',
        'At Muse Consultancy Services (MuseCS), software engineering is our core identity. Based in Sandton, Johannesburg, our senior software engineering cells enforce strict engineering discipline across every software build—utilizing Test-Driven Development (TDD), Domain-Driven Design (DDD), automated CI/CD security scanning, and strict clean architecture boundaries.'
      ]}
      capabilities={[
        {
          title: 'Test-Driven Development (TDD)',
          description: 'Writing automated unit and integration tests before implementation code, ensuring >85% branch coverage and zero regression defects.'
        },
        {
          title: 'Domain-Driven Design (DDD)',
          description: 'Structuring software domains around ubiquitous business language, bounded contexts, aggregates, and clean layer decoupling.'
        },
        {
          title: 'High-Concurrency Systems Engineering',
          description: 'Optimizing asynchronous thread pools, non-blocking I/O, distributed locking, and event loop performance for high throughput.'
        },
        {
          title: 'Automated CI/CD & DevSecOps Pipelines',
          description: 'Building automated release pipelines with static code analysis, vulnerability linting, container security scanning, and blue/green deployments.'
        },
        {
          title: 'Clean Architecture & Design Patterns',
          description: 'Enforcing strict dependency inversion, SOLID principles, hexagonal architecture, and modular code isolation.'
        },
        {
          title: 'Performance Profiling & Memory Optimization',
          description: 'Profiling heap allocation, CPU usage, thread contention, and SQL execution plans to eliminate latency bottlenecks.'
        }
      ]}
      contentSections={[
        {
          id: 'what-is-software-engineering',
          title: 'What Is Software Engineering?',
          paragraphs: [
            'Software engineering is a formal engineering discipline focused on creating reliable, scalable, secure, and maintainable software systems within predictable budgets and timelines.',
            'While informal software coding prioritizes short-term execution speed, software engineering emphasizes structural integrity, mathematical correctness, data boundary isolation, automated test verification, and long-term maintainability. It treats software as a complex, evolving engine that must withstand changing business demands and traffic surges without breaking.'
          ],
          bulletPoints: [
            'Systematic Quality Standards: Replacing developer guesswork with automated test suites, static analysis, and peer code reviews.',
            'Architectural Integrity: Designing modular components with minimal coupling and high cohesion.',
            'Predictable Execution: Utilizing structured agile frameworks and continuous integration to deliver working software every sprint.',
            'Defensive Programming: Handling edge cases, network partition failures, and invalid input gracefully without system crashes.'
          ]
        },
        {
          id: 'core-engineering-disciplines',
          title: 'Core Software Engineering Disciplines at MuseCS',
          paragraphs: [
            'Our engineering methodology is built on proven computer science practices that guarantee enterprise software reliability:'
          ],
          subSections: [
            {
              title: '1. Test-Driven Development (TDD)',
              paragraphs: [
                'We follow the strict Red-Green-Refactor TDD cycle. Developers write failing automated unit tests reflecting business requirements before writing production code. This approach prevents regression defects, enforces clean modular code, and serves as living technical documentation.'
              ]
            },
            {
              title: '2. Domain-Driven Design (DDD)',
              paragraphs: [
                'Complex enterprise software fails when technical code structures drift away from actual business logic. DDD establishes a shared "ubiquitous language" between domain experts and software engineers, partitioning large systems into clean "bounded contexts" that prevent monolithic spaghetti code.'
              ]
            },
            {
              title: '3. Automated CI/CD & DevSecOps',
              paragraphs: [
                'Every code commit undergoes automated static code analysis (SonarQube), unit and integration testing, container security scanning (Trivy), and automated deployment staging. Code cannot reach production without passing 100% of security and test quality gates.'
              ]
            }
          ]
        },
        {
          id: 'software-engineering-vs-coding',
          title: 'How Software Engineering Solves Complex Software Problems',
          paragraphs: [
            'Enterprise software problems—such as race conditions in banking transactions, memory leaks under sustained load, or brittle dependencies—cannot be resolved through superficial bug fixes. Professional software engineering applies fundamental principles to eliminate root causes:'
          ],
          bulletPoints: [
            'Solving Race Conditions: Utilizing atomic database transactions, optimistic locking, and event-sourcing ledgers.',
            'Eliminating Latency Spikes: Implementing Redis caching layers, non-blocking async execution, and optimized SQL indexes.',
            'Preventing Security Breaches: Enforcing input sanitization, OAuth2/JWT token validation, encryption at rest and in transit, and POPIA audit trails.',
            'Managing Code Complexity: Refactoring monolithic classes into decoupled interfaces following SOLID object-oriented design.'
          ]
        },
        {
          id: 'software-engineering-south-africa',
          title: 'Software Engineering in the South African Enterprise Market',
          paragraphs: [
            'South African enterprise leaders in financial services, telecommunications, and logistics require software engineering that complies with stringent local regulatory frameworks, including POPIA and SARB payment mandates. MuseCS brings enterprise-grade software engineering standards directly to the South African market from our Sandton headquarters.'
          ]
        }
      ]}
      processSteps={[
        {
          step: 'DISCIPLINE 01',
          title: 'Domain & Architectural Specification',
          description: 'Defining domain models, bounded contexts, interface contracts, and non-functional performance benchmarks.'
        },
        {
          step: 'DISCIPLINE 02',
          title: 'TDD Test Harness Creation',
          description: 'Authoring automated unit, integration, and contract tests before implementing core feature business logic.'
        },
        {
          step: 'DISCIPLINE 03',
          title: 'Clean Code Implementation',
          description: 'Writing modular code adhering to SOLID principles, design patterns, static typing, and automated linting.'
        },
        {
          step: 'DISCIPLINE 04',
          title: 'CI/CD Pipeline Validation & Release',
          description: 'Automated vulnerability scanning, regression testing, APM telemetry injection, and zero-downtime deployment.'
        }
      ]}
      techStack={[
        'Java 21', 'Spring Boot', 'TypeScript', 'Next.js 15', 'Python', 
        'PostgreSQL', 'Redis', 'SonarQube', 'Docker', 'Kubernetes', 'JUnit', 'Jest'
      ]}
      comparisonTable={[
        {
          feature: 'Testing Discipline',
          traditional: 'Manual testing or retrospective unit testing with low branch coverage and frequent regressions.',
          muse: 'Strict Test-Driven Development (TDD) with >85% automated test branch coverage mandatory.'
        },
        {
          feature: 'Code Architecture',
          traditional: 'Tightly coupled monolithic structures prone to cascading failures and technical debt.',
          muse: 'Domain-Driven Design (DDD) with clean, decoupled bounded contexts and dependency inversion.'
        },
        {
          feature: 'Deployment Safety',
          traditional: 'Manual, error-prone production deployments requiring weekend maintenance windows.',
          muse: 'Fully automated CI/CD DevSecOps pipelines with zero-downtime blue/green deployment.'
        }
      ]}
      faqs={[
        {
          question: 'What is software engineering?',
          answer: 'Software engineering is the systematic application of computer science principles, mathematical modeling, automated testing, and architectural discipline to design, build, test, deploy, and maintain software systems.'
        },
        {
          question: 'What is Test-Driven Development (TDD)?',
          answer: 'TDD is a software engineering practice where developers write automated test cases before writing the functional implementation code. This ensures clean modular code, prevents regression bugs, and maintains high code quality.'
        },
        {
          question: 'How does software engineering differ from routine coding?',
          answer: 'Routine coding focuses on writing syntax to implement immediate features, whereas software engineering considers long-term architectural scalability, security, concurrency, test automation, maintainability, and domain boundaries.'
        },
        {
          question: 'Why is Domain-Driven Design (DDD) important for enterprise software?',
          answer: 'DDD aligns software code structures directly with business domain concepts, preventing communication gaps between developers and domain experts while isolating complex business logic into maintainable, independent modules.'
        },
        {
          question: 'What test coverage standards does MuseCS maintain?',
          answer: 'All software engineered by MuseCS maintains a minimum of 85% automated branch test coverage enforced through automated CI/CD quality gates.'
        }
      ]}
      relatedPages={[
        {
          title: 'Primary Software Development Hub',
          url: '/software-development',
          description: 'Overview of MuseCS enterprise software development capabilities.'
        },
        {
          title: 'Software Architecture & System Design',
          url: '/software-development/software-architecture',
          description: 'Domain-driven microservices, event-driven architecture, and API gateways.'
        },
        {
          title: 'Custom Software Development',
          url: '/software-development/custom-software-development',
          description: 'Bespoke web and cloud platforms engineered for your exact business requirements.'
        },
        {
          title: 'Software Development Team Augmentation',
          url: '/software-development-team-augmentation',
          description: 'Augment your team with senior software engineers trained in TDD and clean architecture.'
        }
      ]}
    />
  );
}
