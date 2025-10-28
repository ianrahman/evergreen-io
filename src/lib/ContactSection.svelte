<script lang="ts">
  import { inView } from "./actions/inView";

  type ContactForm = {
    name: string;
    email: string;
    company: string;
    projectType: string;
    timeline: string;
    message: string;
  };

  const createInitialForm = (): ContactForm => ({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
    message: "",
  });

  let form = $state<ContactForm>(createInitialForm());
  let errors = $state<Partial<Record<keyof ContactForm, string>>>({});
  let submitting = $state(false);
  let submitted = $state(false);

  const updateField = (field: keyof ContactForm, value: string) => {
    form = { ...form, [field]: value };
    if (errors[field]) {
      const next = { ...errors };
      delete next[field];
      errors = next;
    }
    if (submitted) {
      submitted = false;
    }
  };

  const validate = () => {
    const issues: Partial<Record<keyof ContactForm, string>> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      issues.name = "Please add your name.";
    }

    if (!emailPattern.test(form.email.trim())) {
      issues.email = "Enter a valid email address.";
    }

    if (!form.projectType) {
      issues.projectType = "Select the engagement type.";
    }

    if (!form.timeline) {
      issues.timeline = "Let us know your timeline.";
    }

    if (form.message.trim().length < 20) {
      issues.message =
        "Share at least a couple of sentences about the project.";
    }

    return issues;
  };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const issues = validate();
    errors = issues;

    if (Object.keys(issues).length > 0) {
      return;
    }

    submitting = true;
    await new Promise((resolve) => setTimeout(resolve, 600));
    submitting = false;
    submitted = true;
    form = createInitialForm();
  };
</script>

<section class="contact" id="contact">
  <div class="contact-overlay" aria-hidden="true"></div>
  <div class="container">
    <div class="intro" use:inView>
      <div class="intro-logo">
        <img
          src="/assets/tree-128.png"
          srcset="/assets/tree-128.png 1x, /assets/tree-256.png 2x"
          alt="Evergreen Labs logo"
          width="60"
          height="60"
        />
      </div>
      <p class="eyebrow">Contact</p>
      <h2 class="title">Tell us about your next release</h2>
      <p class="summary">
        We respond to every inquiry within two business days. Share what you are
        building and we’ll outline what the first sprint could look like.
      </p>
    </div>

    <div class="contact-grid">
      <form class="contact-form" onsubmit={handleSubmit} novalidate use:inView>
        <div class="field">
          <label for="contact-name">Full name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            oninput={(event) => updateField("name", event.currentTarget.value)}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            autocomplete="name"
          />
          {#if errors.name}
            <p class="field-error" id="contact-name-error" role="alert">
              {errors.name}
            </p>
          {/if}
        </div>

        <div class="field">
          <label for="contact-email">Email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            oninput={(event) => updateField("email", event.currentTarget.value)}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            autocomplete="email"
          />
          {#if errors.email}
            <p class="field-error" id="contact-email-error" role="alert">
              {errors.email}
            </p>
          {/if}
        </div>

        <div class="field">
          <label for="contact-company">Company or team</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Optional"
            value={form.company}
            oninput={(event) =>
              updateField("company", event.currentTarget.value)}
            autocomplete="organization"
          />
        </div>

        <div class="field">
          <label for="contact-project-type">Project type *</label>
          <select
            id="contact-project-type"
            name="projectType"
            value={form.projectType}
            onchange={(event) =>
              updateField("projectType", event.currentTarget.value)}
            aria-invalid={errors.projectType ? "true" : "false"}
            aria-describedby={errors.projectType
              ? "contact-project-type-error"
              : undefined}
          >
            <option value="">Select an option</option>
            <option value="new-product">New product build</option>
            <option value="feature-team">Feature team augmentation</option>
            <option value="design-system">Design system refresh</option>
            <option value="performance"
              >Performance &amp; accessibility uplift</option
            >
          </select>
          {#if errors.projectType}
            <p class="field-error" id="contact-project-type-error" role="alert">
              {errors.projectType}
            </p>
          {/if}
        </div>

        <div class="field">
          <label for="contact-timeline">Timeline *</label>
          <select
            id="contact-timeline"
            name="timeline"
            value={form.timeline}
            onchange={(event) =>
              updateField("timeline", event.currentTarget.value)}
            aria-invalid={errors.timeline ? "true" : "false"}
            aria-describedby={errors.timeline
              ? "contact-timeline-error"
              : undefined}
          >
            <option value="">When do you want to start?</option>
            <option value="2-weeks">Within 2 weeks</option>
            <option value="month">Within a month</option>
            <option value="quarter">This quarter</option>
            <option value="unsure">Exploring options</option>
          </select>
          {#if errors.timeline}
            <p class="field-error" id="contact-timeline-error" role="alert">
              {errors.timeline}
            </p>
          {/if}
        </div>

        <div class="field field--full">
          <label for="contact-message">Project details *</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Share goals, target users, tech stack, and any deadlines."
            value={form.message}
            oninput={(event) =>
              updateField("message", event.currentTarget.value)}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message
              ? "contact-message-error"
              : undefined}
          ></textarea>
          {#if errors.message}
            <p class="field-error" id="contact-message-error" role="alert">
              {errors.message}
            </p>
          {/if}
        </div>

        <button type="submit" class="submit-button" disabled={submitting}>
          {#if submitting}
            Sending…
          {:else}
            Send message
          {/if}
        </button>

        {#if submitted}
          <p class="success" role="status">
            Thank you! We’ll review and respond within five business days.
          </p>
        {/if}
      </form>

      <aside class="contact-aside" use:inView>
        <div class="info-card">
          <h3>How we’ll partner</h3>
          <ul>
            <li>Discovery call and fit assessment</li>
            <li>Two-week roadmap sprint to de-risk scope</li>
            <li>Embedded delivery team with weekly demos</li>
          </ul>
        </div>

        <div class="meta-block">
          <span class="meta-label">Email</span>
          <a class="meta-link" href="mailto:hello@evergreenlabs.io"
            >hello@evergreenlabs.io</a
          >
        </div>

        <div class="meta-block">
          <span class="meta-label">Availability</span>
          <p class="meta-copy">
            New engagements opening in {new Date().toLocaleString(undefined, {
              year: "numeric",
            })}
          </p>
        </div>

        <div class="social-links">
          <a
            href="https://linkedin.com/company/evergreenlabs"
            class="social-link"
            aria-label="Connect with us on LinkedIn"
            target="_blank"
            rel="noopener"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </aside>
    </div>
  </div>
</section>

<style>
  .contact {
    position: relative;
    background: linear-gradient(135deg, #071009 0%, #111f15 45%, #1a3020 100%);
    padding: 6rem 0;
    color: white;
    overflow: hidden;
  }

  .contact-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at 20% 20%,
        rgba(126, 196, 142, 0.28),
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(51, 125, 76, 0.25),
        transparent 50%
      );
    opacity: 0.8;
    pointer-events: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .intro {
    max-width: 640px;
    text-align: center;
    margin: 0 auto 3.5rem;
    opacity: 0;
    transform: translateY(30px);
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
  }

  .intro:global(.is-visible) {
    opacity: 1;
    transform: translateY(0);
  }

  .intro-logo {
    display: inline-flex;
    padding: 0.75rem;
    border-radius: 999px;
    background: rgba(12, 26, 18, 0.75);
    margin-bottom: 1rem;
    box-shadow: 0 12px 28px rgba(8, 22, 14, 0.35);
  }

  .intro-logo img {
    width: 52px;
    height: 52px;
    object-fit: contain;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(198, 240, 206, 0.85);
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 2.6rem;
    letter-spacing: 0.04em;
    margin-bottom: 1.25rem;
  }

  .summary {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(220, 235, 225, 0.86);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
    gap: 2.5rem;
  }

  .contact-form {
    background: rgba(10, 24, 16, 0.85);
    border: 1px solid rgba(126, 196, 142, 0.25);
    border-radius: 20px;
    padding: 2.75rem 2.5rem;
    box-shadow: 0 24px 48px rgba(5, 15, 10, 0.45);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem 1.75rem;
    opacity: 0;
    transform: translateY(35px);
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
  }

  .contact-form:global(.is-visible) {
    opacity: 1;
    transform: translateY(0);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .field--full {
    grid-column: 1 / -1;
  }

  label {
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: rgba(198, 240, 206, 0.9);
  }

  input,
  select,
  textarea {
    font: inherit;
    padding: 0.85rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(198, 240, 206, 0.2);
    background: rgba(7, 16, 11, 0.8);
    color: white;
    transition:
      border 0.2s ease,
      box-shadow 0.2s ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(220, 235, 225, 0.5);
  }

  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 3px solid rgba(126, 196, 142, 0.45);
    outline-offset: 2px;
  }

  .field-error {
    font-size: 0.85rem;
    color: #edc2c2;
    background: rgba(173, 62, 62, 0.15);
    padding: 0.35rem 0.6rem;
    border-radius: 8px;
  }

  .submit-button {
    grid-column: 1 / -1;
    justify-self: flex-start;
    background: linear-gradient(135deg, #5fa761, #3f7d4a);
    color: white;
    padding: 0.95rem 2.5rem;
    border-radius: 999px;
    font-weight: 600;
    letter-spacing: 0.05em;
    border: none;
    cursor: pointer;
    box-shadow: 0 16px 28px rgba(63, 125, 74, 0.35);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease,
      opacity 0.25s ease;
  }

  .submit-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 22px 32px rgba(63, 125, 74, 0.38);
  }

  .submit-button:focus-visible {
    outline: 3px solid rgba(220, 235, 225, 0.8);
    outline-offset: 4px;
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: progress;
  }

  .success {
    grid-column: 1 / -1;
    margin-top: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    background: rgba(79, 189, 119, 0.12);
    color: rgba(198, 240, 206, 0.95);
    border: 1px solid rgba(79, 189, 119, 0.18);
  }

  .contact-aside {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    opacity: 0;
    transform: translateY(35px);
    transition:
      opacity 0.4s ease,
      transform 0.4s ease;
  }

  .contact-aside:global(.is-visible) {
    opacity: 1;
    transform: translateY(0);
  }

  .info-card {
    background: rgba(12, 26, 18, 0.9);
    border: 1px solid rgba(126, 196, 142, 0.25);
    border-radius: 18px;
    padding: 2rem;
    box-shadow: 0 18px 36px rgba(5, 15, 10, 0.35);
  }

  .info-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1.25rem;
    letter-spacing: 0.04em;
  }

  .info-card ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.75rem;
    font-size: 0.98rem;
    color: rgba(220, 235, 225, 0.8);
  }

  .info-card li {
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }

  .info-card li::before {
    content: "•";
    color: rgba(126, 196, 142, 0.9);
  }

  .meta-block {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .meta-label {
    text-transform: uppercase;
    letter-spacing: 0.25em;
    font-size: 0.7rem;
    color: rgba(198, 240, 206, 0.6);
  }

  .meta-link {
    color: rgba(198, 240, 206, 0.95);
    font-size: 1.05rem;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .meta-link:hover {
    opacity: 0.8;
  }

  .meta-link:focus-visible {
    outline: 2px solid rgba(198, 240, 206, 0.6);
    outline-offset: 3px;
  }

  .meta-copy {
    color: rgba(220, 235, 225, 0.75);
    font-size: 0.95rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(12, 26, 18, 0.9);
    border: 1px solid rgba(126, 196, 142, 0.3);
    color: rgba(198, 240, 206, 0.85);
    transition:
      transform 0.2s ease,
      border 0.2s ease,
      background 0.2s ease;
  }

  .social-link:hover {
    transform: translateY(-3px);
    border-color: rgba(198, 240, 206, 0.5);
    background: rgba(12, 26, 18, 0.75);
  }

  .social-link:focus-visible {
    outline: 3px solid rgba(198, 240, 206, 0.8);
    outline-offset: 3px;
  }

  @media (max-width: 1024px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }

    .contact-aside {
      order: -1;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.25rem;
    }

    .info-card {
      flex: 1 1 260px;
    }

    .meta-block,
    .social-links {
      flex: 1 1 220px;
    }
  }

  @media (max-width: 768px) {
    .contact {
      padding: 4.75rem 0;
    }

    .container {
      padding: 0 1.25rem;
    }

    .title {
      font-size: 2.2rem;
    }

    .contact-form {
      grid-template-columns: 1fr;
      padding: 2.25rem 2rem;
    }

    .submit-button {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 1.9rem;
    }

    .summary {
      font-size: 1rem;
    }
  }
</style>
