import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skyPS05WTtIsbV1KDcV3ckFEk5poRt3XPlkuKTbimqUK4GHv6GMjw0vxaqGCJsBR4PFff0F2HLMBHAaxkzxxyywvWZJgikIIPPLS623XG2fLu592f6n2MBnFwqON3J9YX8COUGMiDmeLCoZir4fsCk0m9bDne6hobM0D7pP5HIfCTchMPRI0",
})
