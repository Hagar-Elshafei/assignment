import { test, expect } from '@playwright/test';
import { APItestData } from '../../utils/APITestData';

import axios from 'axios';

const API_BASE_URL = APItestData.APIbaseUrl;

  test('POST: Create User', async () => {
    const response = await axios.post(`${API_BASE_URL}/users`,
      APItestData.createUserTest
    );
    //assert on response code
    expect(response.status).toBe(201);
    
    //assert on response data
    expect(response.data.name).toEqual(APItestData.createUserResponse.name);
    expect(response.data.job).toEqual(APItestData.createUserResponse.job);
    expect(response.data.createdAt).not.toBeNull();
    expect(response.data.id).not.toBeNull();
  });

  test('PUT: update a user details', async () => {
    const response = await axios.put(`${API_BASE_URL}/users/2`,
        APItestData.updateUserTest
      );
      //assert on response code
      expect(response.status).toBe(200);
      
      //assert on response data
      expect(response.data.name).toEqual(APItestData.updateUserTest.name);
      expect(response.data.job).toEqual(APItestData.updateUserTest.job);
      expect(response.data.createdAt).not.toBeNull();
  });

  test('DELETE: should delete a user', async () => {
    const response = await axios.delete(`${API_BASE_URL}/users/2`);
    expect(response.status).toBe(204);
  });