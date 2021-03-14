// import agentRoutes from '@/components/inner/agent/routes'
// import supervisorRoutes from '@/components/inner/supervisor/routes'
// import companyRoutes from "@/components/inner/company/routes";
var home = () => import("./homepage-cards/index.vue");
export default [
  {
    path: "/app/home",
    name: "home",
    component: home
  }
];

// var agent = () => import('@/components/inner/agent/index')
// var supervisor = () => import('@/components/inner/supervisor')
// var company = () => import("@/components/inner/company/index");

// export default [
// {
//   path: '/app/agent',
//   name: 'agent',
//   component: agent,
//   children: [...agentRoutes]
// },
// {
//   path: '/app/supervisor',
//   name: 'supervisor',
//   component: supervisor,
//   children: [...supervisorRoutes]
// },
// {
//   path: "/app/company",
//   name: "company",
//   component: company,
//   children: [...companyRoutes]
// }
// ]
