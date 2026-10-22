# Discord Member Lifecycle Planning Service

<!-- 561-group-standards:badges:start -->
[![Red Cup Engineering](https://img.shields.io/badge/561%20Group-Red%20Cup%20Engineering-c0392b)](https://github.com/red-cup-engineering)
[![License: MIT](https://img.shields.io/badge/license-MIT-c0392b)](LICENSE)
[![Indigenous data: CARE](https://img.shields.io/badge/Indigenous%20data-CARE-4b6f44)](https://github.com/red-cup-engineering/.github/blob/main/GOVERNANCE.md)
[![Tips welcome](https://img.shields.io/badge/tips-welcome-d4a017)](https://github.com/561-group/.github/blob/main/TIPS.md)
<!-- 561-group-standards:badges:end -->

Transport-free, deterministic planning for respectful lifecycle contacts. It plans arrival, leave, completed-participation milestones, and explicitly opted-in reengagement only. It does not connect to Discord, select channels, send messages, load secrets, or retain content.

Policies are provenance and revision bound, have no-mention bounded templates plus a digest, and enforce timezone-aware quiet intervals (including midnight wraparound). The policy sets the maximum state age; state is source-revision bound and contains at most 64 prior receipts. Event facts are bound to that same revision. Milestones require completed participation and tenure strictly before the event; reengagement requires consent plus an authoritative state last-contact time and cooldown.

Every plan is immutable and says `delivery: "forbidden"`, `executable: false`, and `allowedMentions: "none"`. Its identity binds policy, event, and state material digests. Receipt projection HMACs purpose, community, kind, and member but outputs no raw IDs, channel, delivery data, or copy. A typed consumer contract is checked by `npm run check:types`.

```sh
npm run check && npm run check:types && npm test && npm run test:clean
```
