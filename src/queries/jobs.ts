import axios from "axios";

export async function getJobs() {
  const jobs = await axios.get("https://jobs-api-9zia.onrender.com/jobs");
  return jobs.data;
}
