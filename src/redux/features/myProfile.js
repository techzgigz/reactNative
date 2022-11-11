import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    // Dummy Data For Profile For Testing...
  profile : {
        "profilePicURL": "https://dmtwyfwg2t924.cloudfront.net/2022/11/4/1667544989480.blob",
        "profileBgURL": null,
        "id": "e83d990d-7053-44a7-9bfb-39add39ec82e",
        "firstName": "Arun",
        "lastName": "kumar",
        "email": "arun2611998@gmail.com",
        "alternateEmail": "",
        "phone": "8283847779",
        "alternatePhone": "8284847779",
        "country": "India",
        "state": "Haryana",
        "city": "Baruny",
        "websiteURL": [],
        "shortDescription": "i am best",
        "briefDescription": "nothing bestt",
        "educationDetails": [
            {
                "id": "6e3b508a-e481-46b4-9971-135f7b1f3ebe",
                "grade": "A +",
                "skills": [
                    "Empatia"
                ],
                "endDate": "02-11-2022",
                "education": "Information ",
                "institute": "Lovely Profesional Univarsity ",
                "startDate": "17-02-2021",
                "activities": "Testing Education ",
                "description": "Testing Education Datials ",
                "fieldOfStudy": "B teach"
            }
        ],
        "languageSkills": [
            {
                "id": "7569a7c5-41ec-4f03-a088-07a3de1ebabc",
                "name": "Afar",
                "proficiency": "Intermediate",
                "selected_name": {
                    "label": "Afar",
                    "value": "Afar"
                },
                "selected_proficiency": {
                    "label": "Intermediate",
                    "value": "Intermediate"
                }
            }
        ],
        "experience": [
            {
                "id": "e2559664-5b4f-4ac5-b553-c99d2ce7c862",
                "role": "Project Manager",
                "skills": [
                    "Comunicazione efficace"
                ],
                "endDate": "31-12-2022",
                "headline": "",
                "industry": "",
                "location": "India",
                "startDate": "28-06-2022",
                "companyName": "Jangra.com",
                "description": "",
                "employmentType": "Full-time",
                "currentlyWorking": ""
            }
        ],
        "certificate": [
            {
                "id": "325e4c23-492f-48c5-8a1f-f8b98326c1bc",
                "url": "",
                "title": "H & R ",
                "skills": [
                    "Comunicazione efficace"
                ],
                "endDate": "06-11-2022",
                "startDate": "01-11-2022",
                "uploadURL": "https://dmtwyfwg2t924.cloudfront.net/2022/11/4/1667545091121.blob",
                "description": "Testing ",
                "credentialId": "",
                "issuingOrganization": "ldjfnmaf"
            }
        ],
        "status": true,
        "authType": "email",
        "isSignUpDetailsCompleted": true,
        "profileId": "Arun-kumar-2090211732",
        "availableFor": null,
        "myGoal": [
            "Finding Growth Partners",
            "Finding Visibility Partners",
            "Finding Business Partner"
        ],
        "socialMediaUrl": null,
        "address": null,
        "dateOfBirth": null,
        "isSuspended": false,
        "countryCode": "+91",
        "suspendedAt": null,
        "passwordUpdatedAt": null,
        "isDeleted": false,
        "isVerified": true,
        "otp": 415621,
        "otpExpireOn": "1667204548",
        "password": "c18ae11afa224b5ac448a97e7f5b34de01bcec22bc6b1d9fe8f513cae2ef92687456891c4944fd94080abca69aab5eccb87631b7e3d2a951283c613b52e4456b",
        "accountType": "free",
        "tags": null,
        "role": null,
        "createdBy": "USER",
        "stripeCustomerId": null,
        "credits": "0",
        "currentPosition": null,
        "contactInfo": null,
        "fiscalNumber": null,
        "pec": null,
        "cuuipa": null,
        "subscriptionEndAt": null,
        "isUserOnline": false,
        "type": "user",
        "createdAt": "2022-10-31T08:12:28.714Z",
        "updatedAt": "2022-11-04T07:01:13.684Z",
        "growthConnectionsCount": 0,
        "connectionsCount": 0,
        "totalViews": 0,
        "totalShares": 0,
        "profileViews": 0,
        "publishedPostsCount": 0,
        "visibilitySettings": []
    }
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfile: (state, action) => {
      state.profile = action.payload;
    },
    
  },
});

export const {
  saveProfile,
} = profileSlice.actions;
const profileReducer = profileSlice.reducer;

export default profileReducer;
