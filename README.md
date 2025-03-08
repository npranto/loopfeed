# LoopFeed

A smart feedback platform that helps businesses improve product quality and delivery through real customer insights.

## Overview

LoopFeed bridges the gap between customers and sellers in the e-commerce ecosystem:

- **For Customers**: Track product feedback, earn rewards, and make informed purchasing decisions
- **For Sellers**: Gain data-driven insights to improve products and services based on authentic feedback

## Learn More

For detailed information about LoopFeed, please see:

- [Vision and Purpose](./VISION.md) - Core objectives and the problem LoopFeed solves
- [User Roles](./USER_ROLES.md) - Core user roles - specific interactions, permissions, and features
- [Metrics & Goals](./METRICS_AND_GOALS.md) - Core success metrics & goals for LoopFeed

## Development

## Git Branch Naming Convention

To maintain consistency in branch naming, use the following prompt to generate branch names based on GitHub issue details.

### AI Prompt for Generating Branch Names**
```plaintext
Generate a branch name following this format:  
<label>/<issue-number>-<shortened-issue-title>  
from the given GitHub issue details. Follow these rules:  

- Convert the **issue title** to lowercase and use - instead of spaces.  
- Keep the title **concise (5-7 words max)** by removing unnecessary words.  
- Use the **issue label** as the prefix (e.g., feature/, bugfix/, docs/).  
- Use the **issue number** immediately after the label for tracking.  
- Ensure readability while keeping it short.
- Just give me the name of branch, so I can easily copy it, no need for breakdowns

Issue Details:
<PASTE IN ISSUE TITLE, NUMBER, AND LABEL HERE...>
Example:
`Define the Primary Goals of the App #4 docs`
```
