<template>
  <div class="about-reviews-container">

    <div class="about-reviews-header">
      <h1>Voices from Our Community</h1>
      <p>Reflections from those who chose to send a message to their future selves.</p>
    </div>

    <div class="about-reviews-cards">

      <div v-for="(review, index) in reviews" :key="index" class="about-reviews-card">
        <!-- Rating stars -->
        <div class="about-reviews-rating" :aria-label="`Rating: ${review.rating} out of 5`" role="img">
          <svg
            v-for="star in 5"
            :key="star"
            class="about-reviews-star"
            :class="{ filled: star <= review.rating }"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>

        <p class="about-reviews-message">"{{ review.text }}"</p>

        <div class="about-reviews-user">
          <img :src="review.image" :alt="review.name" class="about-reviews-image" />

          <div class="about-reviews-user-info">
            <h3>{{ review.name }}</h3>
            <span>{{ review.location }}</span>
          </div>

        </div>

        <div class="about-quote-icon">
          <svg width="60px" height="60px" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve" transform="rotate(180)" stroke="#000000" stroke-width="0.0007"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M27.792,8.103v9.427c-5.957,1.364-8.811,5.091-9.185,12.032h9.185v22.336H7.813V33.531 C7.813,20.257,13.521,10.083,27.792,8.103 M27.792,4.103c-0.183,0-0.366,0.013-0.55,0.038C12.134,6.237,3.813,16.675,3.813,33.531 v18.366c0,2.209,1.791,4,4,4h19.979c2.209,0,4-1.791,4-4V29.562c0-2.209-1.791-4-4-4h-4.411c0.988-2.571,2.832-3.567,5.304-4.133 c1.818-0.417,3.107-2.034,3.107-3.899V8.103c0-1.156-0.501-2.257-1.373-3.017C29.687,4.448,28.751,4.103,27.792,4.103L27.792,4.103 z"></path> <path d="M62.187,18.103v9.427c-5.955,1.364-8.809,5.091-9.183,12.032h9.183v22.336H42.208V43.531 C42.208,30.257,47.917,20.083,62.187,18.103 M62.187,14.103c-0.183,0-0.366,0.013-0.55,0.038 c-15.108,2.097-23.429,12.534-23.429,29.391v18.366c0,2.209,1.791,4,4,4h19.979c2.209,0,4-1.791,4-4V39.562c0-2.209-1.791-4-4-4 h-4.409c0.988-2.571,2.831-3.567,5.303-4.133c1.817-0.417,3.106-2.034,3.106-3.899v-9.427c0-1.156-0.501-2.257-1.373-3.017 C64.081,14.448,63.146,14.103,62.187,14.103L62.187,14.103z"></path> <g> <path d="M24.583,45.565c-0.553,0-1-0.447-1-1V33.583h-4.654c-0.553,0-1-0.447-1-1s0.447-1,1-1h6c0.553,0,0.654,0.43,0.654,0.982 v12C25.583,45.118,25.136,45.565,24.583,45.565z"></path> </g> <g> <path d="M59.583,57.565c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1s1,0.447,1,1v2C60.583,57.118,60.136,57.565,59.583,57.565z"></path> </g> <g> <path d="M59.583,51.565c-0.553,0-1-0.447-1-1v-6.982h-4.654c-0.553,0-1-0.447-1-1s0.447-1,1-1h6c0.553,0,0.654,0.43,0.654,0.982v8 C60.583,51.118,60.136,51.565,59.583,51.565z"></path> </g> </g> </g></svg>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import Review01 from '../assets/images/review01.jpg'
import Review02 from '../assets/images/review02.jpg'
import Review03 from '../assets/images/review03.jpg'

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    text: "Writing to my future self felt strangely liberating. I sealed a message for five years from now, and it gave me perspective on what really matters to me today. It’s like giving a gift to myself that I can’t unwrap yet.",
    image: Review01,
    rating: 5
  },
  {
    name: "Lucas Pereira",
    location: "Lisbon, Portugal",
    text: "I used TimeCapsule to write down my goals for the next three years. Just knowing that they’re waiting for me in the future gives me a stronger sense of accountability and excitement. It’s more powerful than I expected.",
    image: Review02,
    rating: 5
  },
  {
    name: "Emma Johansson",
    location: "Stockholm, Sweden",
    text: "I wrote a capsule to my future self before starting university. It’s comforting to know that in a few years I’ll be able to look back and see how my dreams have evolved. It feels like anchoring a piece of myself in time.",
    image: Review03,
    rating: 5
  }
]
</script>

<style scoped>
.about-reviews-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 100px 24px;
  background: var(--color-bg-light);
}

.about-reviews-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 48px;
  max-width: 800px;
}

.about-reviews-header h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 2px;
  color: var(--color-text);
  margin-bottom: 10px;
}

.about-reviews-header p {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 1px;
  color: var(--color-text);
}

/* About Cards */
.about-reviews-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: auto;
}

.about-reviews-card {
  display: flex;
  flex-direction: column;
  gap: 36px;
  background: var(--color-bg-light);
  padding: 24px;
  border-radius: 10px;
  text-align: left;
  border: 1px solid var(--color-lines);
  /* box-shadow: 0px 4px 12px rgba(0,0,0,0.1); */
  position: relative;
}

/* Stars */
.about-reviews-rating {
  display: flex;
  gap: 4px;
}

.about-reviews-star {
  width: 28px;
  height: 28px;
  fill: none;
  stroke: var(--color-highlight);
  stroke-width: 1.2;
}

.about-reviews-star.filled {
  fill: var(--color-highlight);
  stroke: var(--color-highlight-dark);
}

/* Review message */
.about-reviews-message {
  font-size: 15px;
  font-style: italic;
  line-height: 1.6;
  color: var(--color-text);
}

/* Review user */
.about-reviews-user {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 6px;
}

/* Avatar */
.about-reviews-image {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--color-lines);
}

/* Review user name */
.about-reviews-user-info h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--color-text);
}

.about-reviews-location {
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-light);
  margin-bottom: 12px;
}

/* Quote icon */
.about-quote-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  opacity: 0.75;
}

</style>
