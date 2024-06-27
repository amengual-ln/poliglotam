<script>
  let studentName = "";
  let accepted = false;
</script>

<section>
  <h1 class="text-center text-xl font-medium">Welcome!</h1>

  <p class="py-2">
    Welcome to Poliglotam’s Group Courses! To provide you with the highest
    quality service, please read our terms and conditions carefully. After
    reading, kindly confirm your acceptance of them.
  </p>

  <h3>Payment</h3>
  <ul class="py-2 list-disc ml-8">
    <li>Classes must be paid for in advance on a monthly basis.</li>
    <li>
      Payment is due at least 24 hours before the start of the following month.
    </li>
    <li>
      The latest payment date is the 5th of the month. If you are unable to make
      the payment within this timeframe, please contact us to avoid being barred
      from the courses.
    </li>
  </ul>

  <h3>Attendance and Recordings</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      If you cannot attend a class, notify a member of the Poliglotam team as
      soon as possible to request a recording of the lesson.
    </li>
    <li>
      It is your responsibility to watch the recorded class within 4-5 days.
    </li>
    <li>
      Missed classes will not be reimbursed. Instead, you must watch the
      recording to stay up to date with the course.
    </li>
  </ul>

  <h3>Punctuality</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      If you join the class late, it will still end at the previously agreed
      time without any extension.
    </li>
    <li>
      If you join within the first 15 minutes of the class without prior
      notification, the teacher may end the class at their discretion.
    </li>
  </ul>

  <h3>Class Cancellation</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      To cancel a class, there must be mutual agreement with all group members,
      and it must be arranged 24 hours before the next class..
    </li>
    <li>
      If you cannot continue the lessons, notify the teacher or a Poliglotam
      administrator at least one week before the end of the current month.
    </li>
  </ul>

  <h3>Classroom Etiquette</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      Keep your microphone on mute when not speaking and your camera on during
      the class.
    </li>
    <li>Be respectful to your classmates and teachers.</li>
  </ul>

  <h3>Complaints</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      If you have any complaints, please notify the Poliglotam administrators
      promptly so we can assist you.
    </li>
  </ul>

  <h3>Commitment and Payments</h3>
  <ul class="py-2 list-disc ml-8">
    <li>
      Timely payment is crucial as group pricing depends on everyone’s payments
      to maintain the initial price.
    </li>
    <li>
      If a student fails to pay or leaves the course without prior notice, the
      total price will either be divided among the remaining participants or the
      number of lessons will be adjusted to match the previous payment.
    </li>
  </ul>
  <p>Thank you for your understanding and cooperation.</p>

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
          >I have read and accept the terms for the group classes</label
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
