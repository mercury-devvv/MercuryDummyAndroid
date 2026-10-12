package com.mercurydevvv.mercurydummy

import androidx.compose.ui.test.assertIsEnabled
import androidx.compose.ui.test.assertIsNotEnabled
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.performTextInput
import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class LoginE2ETest {
    @get:Rule
    val compose = createAndroidComposeRule<MainActivity>()

    @Test
    fun loginButtonRequiresExactlySixCharactersInBothFields() {
        val username = compose.onNodeWithTag("username-field")
        val password = compose.onNodeWithTag("password-field")
        val login = compose.onNodeWithTag("login-button")

        login.assertIsNotEnabled()
        username.performTextInput("user12")
        login.assertIsNotEnabled()
        password.performTextInput("pass1")
        login.assertIsNotEnabled()
        password.performTextInput("2")
        login.assertIsEnabled()
        username.performTextInput("3")
        login.assertIsNotEnabled()
    }

    @Test
    fun validCredentialsNavigateToWelcomeScreen() {
        compose.onNodeWithTag("username-field").performTextInput("user12")
        compose.onNodeWithTag("password-field").performTextInput("pass12")
        compose.onNodeWithTag("login-button").performClick()

        compose.onNodeWithTag("welcome-message").assertExists()
    }
}
