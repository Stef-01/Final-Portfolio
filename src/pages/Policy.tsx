import { PageIntro, PageShell } from "../components/PageShell";
import { RolesTimeline } from "../components/RolesTimeline";
import { policyRoles } from "../types/roles";

const stats = [
  { value: "5", label: "policy and government roles" },
  { value: "3", label: "Department of Social Services teams" },
  { value: "1", label: "Parliamentary Library internship" },
];

export function Policy() {
  return (
    <PageShell>
      <PageIntro
        title="Public policy, government, and implementation"
        description="Three Department of Social Services teams (NDIS outcomes, NDIS financial policy, the National Redress Scheme), a Parliamentary Library internship, and Indigenous primary-care implementation research."
        stats={stats}
      />

      <RolesTimeline roles={policyRoles} title="Government work" />
    </PageShell>
  );
}
