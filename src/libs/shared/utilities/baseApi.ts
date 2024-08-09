export class BaseApiRequest {
  public baseUrl: string;

  constructor(baseUrl: string | undefined) {
    if (!baseUrl) {
      throw new Error('Base URL is required');
    }
    this.baseUrl = baseUrl;
  }

  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`);
    return response.json();
  }

  async post<TBody, TResponse = unknown>(url: string, data: TBody): Promise<TResponse> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
