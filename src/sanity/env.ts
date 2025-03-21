export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-26";

// Note: Use these env. vars for deploying studio
// export const dataset = assertValue(
//   process.env.SANITY_STUDIO_DATASET,
//   "Missing environment variable: SANITY_STUDIO_DATASET",
// );
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

// Note: Use these env. vars for deploying studio
// export const projectId = assertValue(
//   process.env.SANITY_STUDIO_PROJECT_ID,
//   "Missing environment variable: SANITY_STUDIO_PROJECT_ID",
// );

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
