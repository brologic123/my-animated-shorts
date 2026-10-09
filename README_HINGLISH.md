# 30-sec 2D Comedy Shorts — Android-friendly starter

## Is package se kya milega?
- 30-second vertical 9:16 Remotion animation (1080 x 1920, 30 FPS)
- Original simple 2D cartoon office scene
- Timed on-screen dialogue/captions
- GitHub Actions workflow jo MP4 render karke Artifacts me dega

**Note:** Is starter video me recorded human/AI voice nahi hai; dialogue on-screen text ke roop me hai. Voice add karne ke liye TTS/audio asset alag se chahiye. GitHub Actions rendering may use free minutes/limits or incur charges depending on your account.

## Android se sabse simple workflow
1. ZIP ko extract karna hoga. Phone me Files app se ZIP open karke extract karein.
2. GitHub par login karein: https://github.com
3. New repository banayein, e.g. `my-animated-shorts`.
4. Extract kiye hue **andar ke files/folders** repository me upload karein (ZIP ko as-is upload karna kaafi nahi hota).
5. Repository me **Actions** tab kholein. Agar GitHub workflow prompt aaye, workflow allow karein.
6. Left side me **Render 30-sec Comedy Short** select karein.
7. **Run workflow** tap karein.
8. Run complete hone ke baad workflow run kholein aur **Artifacts** me `meeting-comedy-mp4` download karein.
9. ZIP download ko phone me extract karke MP4 YouTube Shorts me upload kar sakte hain.

## Agar Claude Code use karna hai
Claude Code on the web ko GitHub repository chahiye; woh aam taur par sirf ZIP upload karke render nahi karta. Repository connect karein, phir Claude ko bol sakte hain:
"Review this Remotion project, install dependencies, run the render workflow checks, fix any errors, and ensure the GitHub Actions workflow produces out/meeting-comedy.mp4 as an artifact. Keep the video vertical 9:16 and exactly 30 seconds. Do not claim success unless the render actually completes."

## Video content
Boss: "Emergency meeting. Right now!"
Employee: "Is the building on fire?"
Boss: "No. We need to discuss the meeting schedule."
Employee: "So... could this have been an email?"

## Editing the story
Animation and dialogue are in `src/Video.tsx`. If you ask Claude to change it, preserve 1080x1920, 30 FPS, and 900 frames (30 seconds).
