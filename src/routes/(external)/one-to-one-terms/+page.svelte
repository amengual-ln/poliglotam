<script>
  let studentName = "";
  let accepted = false;
</script>

<section>
  <h1 class="text-center text-xl font-medium">Welcome!</h1>

  <p class="py-2">
    Welcome to Poliglotam! We are pleased to have you in our courses. To offer
    you quality service, we ask that you read and accept our terms and
    conditions for personalized (ONE TO ONE) or closed group classes.
  </p>

  <h3>Payments</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      <b>Advance Payment:</b> Payments must be made at least 24 hours before the
      class.
    </li>
    <li>
      <b>Non-Payment:</b> If we have not received the payment, we will proceed to
      restrict access to the courses until the payment is verified.
    </li>
  </ul>

  <h3>Cancellations and Delays</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      <b>Cancellation Notice:</b> If you cannot attend a class, you must notify us
      at least 24 hours in advance. If the class is not canceled on time, it will
      be considered as given (certain conditions apply).
    </li>
    <li>
      <b>Late Arrivals:</b> If you connect late to the class, it will end at the
      previously agreed time without adding extra time.
    </li>
    <li>
      <b>Major Delays:</b> If you connect 15 minutes late without notice, the teacher
      may consider the class as given.
    </li>
    <li>
      <b>Cancellation Methods:</b> Cancellations must be made by email or WhatsApp,
      confirming receipt.
    </li>
  </ul>
  <h3>Class Dynamics</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      <b>Camera On:</b> To ensure your teacher can pace the class to your needs,
      it is important to keep your camera on. This allows the teacher to see if you
      are taking notes or encountering any difficulties during the class.
    </li>
    <li>
      <b>Respect in Class:</b> Mutual respect is essential for maintaining a pleasant
      dynamic. If you have any complaints, please communicate them to the Poliglotam
      team.
    </li>
  </ul>
  <h3>Closed Group Classes</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      <b>Cancellations:</b> The cancellation must be agreed upon by all group members.
    </li>
    <li>
      <b>Student Relationship:</b> Students must have some connection, such as colleagues,
      friends, or partners. They must also have the same language level to ensure
      a good dynamic and progress.
    </li>
  </ul>
  <h3>Comunication</h3>
  <p class="py-2">
    We will stay in touch with you for any needs or clarifications related to
    our services. Please do not hesitate to contact us for any questions.
  </p>
  <h3>Confirmation of acceptance</h3>
  <p class="py-2">
    Once you have read the terms and conditions, we ask that you confirm your
    acceptance by writing your full name.
  </p>
  <p class="py-2">
    For any additional queries, we are at your disposal. We hope you enjoy your
    learning experience with us!
  </p>

  <hr class="my-4" />

  <form method="POST" class="max-w-screen-lg mx-auto">
    <label for="student-name">Full name:</label>
    <div class="grid gap-4">
      <input
        type="text"
        name="student-name"
        value={studentName}
        on:change={(event) => (studentName = event.target.value)}
        class="border px-3 py-1 outline-[#E05900]/50"
      />
      <div class="flex items-baseline justify-center">
        <input
          type="checkbox"
          value={accepted}
          on:change={() => (accepted = !accepted)}
          id="accepted"
          class="cursor-pointer scale-150 accent-[#E05900]"
        />
        <label for="accepted" class="p-4 cursor-pointer text-lg"
          >I have read and accept the terms for the one-to-one classes</label
        >
      </div>
      <button
        type="submit"
        disabled={!accepted || studentName.trim() === ""}
        class="bg-[#E05900]/80 text-white py-2 w-48 mx-auto hover:bg-[#E05900] disabled:bg-[#E05900]/50"
        >Accept</button
      >
    </div>
  </form>
</section>
