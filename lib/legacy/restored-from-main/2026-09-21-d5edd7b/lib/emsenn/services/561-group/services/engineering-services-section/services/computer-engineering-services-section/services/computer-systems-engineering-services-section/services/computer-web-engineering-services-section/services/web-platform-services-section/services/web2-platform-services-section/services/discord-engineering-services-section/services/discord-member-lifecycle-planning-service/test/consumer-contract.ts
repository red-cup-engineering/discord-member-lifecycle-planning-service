import { planMemberLifecycle, type LifecycleEvent, type LifecyclePolicy, type LifecycleState } from "@red-cup-engineering/discord-member-lifecycle-planning-service";

declare const policy: LifecyclePolicy;
declare const state: LifecycleState;
declare const event: LifecycleEvent;

const proposal = planMemberLifecycle({
  communityId: "community",
  memberId: "member",
  kind: "arrival",
  now: "2026-08-29T12:00:00.000Z",
  policy,
  state,
  event
});

const noMentions: "none" = proposal.allowedMentions;
const impossibleDelivery: "forbidden" = proposal.delivery;
void noMentions;
void impossibleDelivery;
