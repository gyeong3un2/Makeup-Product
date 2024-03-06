export async function apiFetch() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error: ', error);
  }
}
