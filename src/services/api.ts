const API_BASE_URL = 'https://reqres.in/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface UserResponse {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
}

export const authService = {
  async checkEmailExists(email: string): Promise<boolean> {
    try {
      // Check both pages of users
      const responses = await Promise.all([
        fetch(`${API_BASE_URL}/users?page=1`),
        fetch(`${API_BASE_URL}/users?page=2`)
      ]);

      const results = await Promise.all(responses.map(r => r.json())) as UserResponse[];
      const allUsers = results.flatMap(result => result.data);
      
      return allUsers.some(user => user.email === email);
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    }
  },

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      if (error.error === 'user not found') {
        throw new Error('Invalid email or password');
      }
      throw new Error(error.error || 'Login failed');
    }

    return response.json();
  },

  async register(credentials: LoginCredentials): Promise<AuthResponse> {
    // Check if email is in the correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(credentials.email)) {
      throw new Error('Invalid email format');
    }

    // Check if password meets minimum requirements
    if (credentials.password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    // Check if the email already exists
    const exists = await this.checkEmailExists(credentials.email);
    if (exists) {
      throw new Error('This email is already registered. Please use a different email or login instead.');
    }

    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      if (error.error === 'Note: Only defined users succeed registration') {
        throw new Error('Registration is only available for test accounts. Please use eve.holt@reqres.in');
      }
      throw new Error(error.error || 'Registration failed');
    }

    return response.json();
  }
};