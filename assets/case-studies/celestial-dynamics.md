# Celestial Dynamics

The following case of study start from an existing application where a Product Manager is tasked to identify the gaps in the product and suggest a product strategy to increase the adoption usage and generate hype regarding the product concept itself.

## The Celestial Dynamic mission

Celestial Dynamics is a Telegram bot that allow user to upload receipts and process the items within the receipt.
The user interaction with the bot is done via commands as usual telegram bot-style and a specific command made available a dashboard that present some raw statistics about the upload.
Data collected from user interview and CSAT surveys identify a very low retention rate and feedback about the difficulty to quickly get started.

## Why this app?

In today's economy, individuals are more budget-conscious than ever, yet they lack simple, low-friction tools to understand their spending habits. Manual budgeting is tedious and often abandoned. Existing apps require cumbersome setup. The core problem is the gap between the desire for financial clarity and the high effort required to achieve it

## Identify the pain point of our persona

As first attempt, I analyzed the potential customer base of such application, the user persona identified was a 30-year-old young guy that have a fixed salary and love to track how much of the budget is spent on buying goods and get insights to improve the way about how the budget is spent.

This user persona was naturally built considering the group of early adopters chosen by the business for the early stage of the product launch.

Before formulate a proposal to be validated, I started from answering the following questions:

1. What the bot's data is telling us? Where the customer's flow drop off? And how many receipts are uploaded for a user in a month?

2. Can we compare the behavior between top performers vs who performed a login without even scanning a receipt? Where are they struggling? What they love to use? What they need to achieve their goal?

3. What leads customer to not continue to use the application? Is the user interface or the lack of data that the bot made available through the dashboard?

## Two leaky buckets at same time

The user interview clearly made available the two main pain point for the customer segment analyzed:

1. Usability crisis: The core user experience of the Telegram bot is clunky and confusing. A significant percentage of users drop off before ever uploading their first receipt. The path to value is filled with friction.

2. Lack of smart insights: The advanced user that is able to upload a scan and consume the dashboard is not satisfied about the insight from the scan itself: there is a sum per day, but there is no graph highlighting the MoM trend and is not possible to obtain a monthly overview per category of goods

So, from where to start? Putting number aside is clear that postponing the usability issue will only make the problem bigger later.

## A hypothesis to be validated

By redesigning the user experience to be more intuitive and guided, simplifying the onboarding process we'll aim to solve the problem for the user persona target

Success metrics:

- A 50% increase in the percentage of new users who successfully upload their first receipt within their first session.

- A 15% increase in our D7 retention rate.

- A measurable improvement in CSAT scores related to 'ease of use'

## The phased roadmap

- Phase 1 - Plug the Leaks (Now):

        - Goal: Redesigned Conversational Onboarding.

            - Epic: Streamlined Receipt Upload Flow (e.g., reduce the number of commands/steps).

            - Success criteria: Hit the success metrics defined in our hypothesis.

- Phase 2 - Deliver New Value (Next/Later):

        - Goal: Provide smart insights for budget spending analysis.

            - Epic: Monthly spend (MoM & YoY) for goods categories.

            - Success criteria: 
                - 40% of target people use the functionality at least one time.
                - Correlate this usage with a further 10% increase in D30 retention for those users

## Next steps task list

- As first step I'll sign off the roadmap with the stakeholders so that there is a full alignment towards the immediate next step

- I'll reach separately the GTM and Sales to plan the needed coordination to bring the new release gradually to a target cohort that needs to be properly informed to not being lost when the new release is done.

- I'll craft a simple prototype for the user interface to bring to the refinement sessions with the team lead and lead designer. Is crucial quickly highlight the pain point leaving implementation details for later

- I'll craft with them and with the team the backlog of user stories based on the epics, clarifying the needs for an incremental solution to get early feedback from early adopters

- At the end of every sprint, with the new increment in production, I'll anticipate the findings of the previous iteration and how they are contributing to reach the epic goals