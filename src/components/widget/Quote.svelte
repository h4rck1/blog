<script>
  import { generateQuote } from "@utils/profile-utils"

  let ms = 1000
  let quote = generateQuote()
  const createQuote = () => (quote = generateQuote())

  let clear
  $: {
    clearInterval(clear)
    clear = setInterval(createQuote, ms)
  }
</script>

<blockquote>
  <div class="text-center text-neutral-400 mb-2.5 transition">{quote}</div>
</blockquote>
