---
title: This is a sumin's blog post!
published_at: 2025-05-03
snippet: An example of a blog post.
disable_html_sanitization: true
allow_math: true
---

æ
hihihihihihihi

1A
For loop
저는 베트남 rmit에서 왔습니ㅔㅈㅇ다. 그때 친하게 지낸 교수님이 있으셔서 그 교수님의 사이트를 참고하며 for loop를 배웠어요.

베트남 RMIT에서 친하게 지냈던 교수님의 사이트를 참고하며 다시 한 번 복습했어요.
📌 for문 기초 복습
for (초기화; 조건; 최종식) {
// 반복 실행할 코드
}

- 초기화: 변수를 선언하고 시작값 설정
- 조건: 반복을 계속할 조건
- 최종식: 반복이 끝날 때마다 변수 값을 변경
  예시:
  for (let i = 0; i < 5; i++) {
  console.log(i); // 0부터 4까지 출력
  }
  중첩 for문으로 격자를 만드는 예시:
  for (let y = 0; y < height; y += gridSize) {
  for (let x = 0; x < width; x += gridSize) {
  rect(x, y, gridSize, gridSize);
  }
  }
  ㄴ

# This is h1

![a drippy lemon](logo.svg)

^ images are written like this: `![description](file_path/file_name.png)`

## This is h2

_This is italic._[^1]

[^1]: This is a footnote, _which can also be italic_.

**This is bold.**

Hyperlinks can be written like this: `[text](https://URL)`

You can find a markdown cheat-sheet [here](https://www.markdownguide.org/cheat-sheet/).

## Maths:

... which can be written inline, like this: $\{ x, y, z \} \in \N$

... or block, like this:

$$ x^2 + y^2 = z^2 $$

Visit [ $\KaTeX$ ](https://katex.org/docs/supported#fractions-and-binomials) for more information about writing maths.

## Embedding video:

<iframe id="coding_train_video" src="https://www.youtube.com/embed/rI_y2GAlQFM?si=RDgjkpunxk1mQzMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<script type="module">

    console.log (`hello world! 🚀`)

    const iframe  = document.getElementById (`coding_train_video`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16

</script>

## Embedding p5 sketches:

<iframe id="falling_falling" src="https://editor.p5js.org/capogreco/full/Fkg05m7aA"></iframe>

<script type="module">

    const iframe  = document.getElementById (`falling_falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

## Canvas API

<canvas id="canvas_example"></canvas>

<script type="module">
    const cnv = document.getElementById (`canvas_example`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    const ctx = cnv.getContext (`2d`)
    const pos = {
        x: -100,
        y: cnv.height / 2 - 50
    }
    
    function draw_frame () {
        ctx.fillStyle = `turquoise`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        ctx.fillStyle = `hotpink`
        ctx.fillRect (pos.x, pos.y, 100, 100)

        pos.x += 2

        if (pos.x > cnv.width) {
            pos.x = -100
        }

        requestAnimationFrame (draw_frame)
    }

    draw_frame ()
</script> '
