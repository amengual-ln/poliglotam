<script>
  import Animate from "$lib/components/atoms/Animate.svelte";
  import ExamPreparation from "$lib/components/icons/ExamPreparation.svelte";
  import SmallGroups from "$lib/components/icons/SmallGroups.svelte";
  import FlexibleSchedules from "$lib/components/icons/FlexibleSchedules.svelte";
  import PoliglotamMethodology from "$lib/components/icons/PoliglotamMethodology.svelte";
  import StudentAdaptation from "$lib/components/icons/StudentAdaptation.svelte";
  import Immersion from "$lib/components/icons/Immersion.svelte";
</script>

<svelte:head>
  <title>Poliglotam</title>
</svelte:head>

<section>
  <img src="/home-poliglotam.webp" alt="Hero" />
</section>
<div class="bg-[#d57927] text-white py-8">
  <section
    class="max-w-screen-2xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 items-center text-center gap-8"
  >
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <SmallGroups color="white" />
        </div>
        <h2 class="mb-2">Small groups</h2>
        <p>Semi-personalized teaching with groups of up to 8 people.</p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <PoliglotamMethodology color="white" />
        </div>
        <h2 class="mb-2">Poliglotam methodology</h2>
        <p>
          Our teachers apply methodologies that guarantee the quality of service
          and learning.
        </p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <FlexibleSchedules color="white" />
        </div>
        <h2 class="mb-2">Flexible Schedules</h2>
        <p>Schedule classes according to your availability.</p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <StudentAdaptation color="white" />
        </div>
        <h2 class="mb-2">Student Adaptation</h2>
        <p>
          Our instructors are trained to identify each student's way of
          learning.
        </p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <ExamPreparation color="white" />
        </div>
        <h2 class="mb-2">Exam preparation</h2>
        <p>Receive preparation for international exams.</p>
      </article>
    </Animate>
    <Animate type="fly">
      <article>
        <div class="flex justify-center pb-6">
          <Immersion color="white" />
        </div>
        <h2 class="mb-2">Immersion</h2>
        <p>
          Participate in recreational activities and cultural events to practice
          your knowledge.
        </p>
      </article>
    </Animate>
  </section>
</div>
<section>
  <img src="/home-metas.webp" alt="Logra tus metas" />
</section>
