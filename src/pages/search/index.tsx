import { useRouter } from "next/router";

function Page() {
  const router = useRouter();
  const { q } = router.query;

  console.log(q);
  return <div>search{q}</div>;
}

export default Page;
